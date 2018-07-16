export default class Observable {
	/**
	 * Подписывается на событие eventName генерируемое element
	 * 
	 * @static
	 * @param {HTMLElement} element - элемент на котором будет слушаться событие
	 * @param {string} eventName - имя события
	 * @returns {Observable}
	 */
	public static fromEvent(element: HTMLElement, eventName: string): Observable {
		return new Observable((next, error, complete) => {
			const cb = (e: Event) => next && next(e);
			element.addEventListener(eventName, cb, false);

			return () => element.removeEventListener(eventName, cb);
		})
	}

	constructor(
		public subscribe: (next?: (value: any) => any, error?: (value: any) => any, complete?: (value: any) => any) => void
	) { }

	/**
	 * Методо выполняет указанное действие над полученным значением
	 *
	 * @param {*} mapFn
	 * @returns {Observable}
	 */
	public map(mapFn: (value: any) => any): Observable {
		return new Observable((next = () => {}, error = () => {}, complete = () => {}) => this.subscribe(
			value => next && next(mapFn(value)),
			err => error && error(err),
			value => complete && complete(value)
		));
	}

	/**
	 * Метод пропускает значение дальше по цепочке, если переданный Callback возвращает true
	 *
	 * @param {*} filterFn
	 * @returns {Observable}
	 */
	public filter(filterFn: (value: any) => boolean): Observable {
		return new Observable((next = () => {}, error = () => {}, complete = () => {}) => this.subscribe(
			value => {
				if (filterFn(value) && next) {
					return next(value);
				}
			},
			err => error && error(err),
			value => complete && complete(value)
		));
	}
}