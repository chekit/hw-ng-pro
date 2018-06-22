import { Component } from '@angular/core';
import data from './data';

interface IData {
  [key: string]: string | number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts: IData[] = data.slice(0, 4);

  public ngOnInit(): void {
    setTimeout(() => this.posts.push(...data.slice(4)), 3500);
  }

  public trackByIndex(i: number): number {
    return i;
  }
}
