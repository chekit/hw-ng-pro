import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  private value: number = null;

  public transform(value: number): string {
    const currentDate: number = Date.now();

    this.value = value;

    const ms: number = currentDate - value;

    if (ms < 0) {
      return ``;
    }

    const s: number = this.getSeconds(ms);
    const m: number = this.getMinutes(s);
    const h: number = this.getHourse(m);
    const d: number = this.getDays(h);
    const y: number = this.getYears(d);

    return s < 60
      ? `Published ${s} seconds ago`
      : m < 60
        ? `Published ${m} minutes ago`
        : h < 60
          ? `Published ${h} houres ago`
          : d < 365
            ? `Published ${d} days ago`
            :  `Published ${y} years ago`;
  }

  private getSeconds(miliseconds: number): number {
    return Math.round(miliseconds / 1000);
  }

  private getMinutes(seconds: number): number {
    return Math.round(seconds / 60);
  }

  private getHourse(minutes: number): number {
    return Math.round(minutes / 60);
  }

  private getDays(hourse: number): number {
    return Math.round(hourse / 24);
  }

  private getYears(days: number): number {
    return Math.round(days / 365);
  }
}
