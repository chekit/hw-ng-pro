import { Component } from '@angular/core';

interface IData {
  [key: string]: string | number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: IData[] = [
    {
      title: 'Post 1',
      content: 'Post text',
      published: 1529308222230
    },
    {
      title: 'Post 2',
      content: 'Post 2 text',
      published: 1359240595003
    },
    {
      title: 'Post 3',
      content: 'Post 3 text',
      published: 1529307397902
    },
    {
      title: 'Post 4',
      content: 'Post 4 text',
      published: 1529240595993
    }
  ];

  public trackByIndex(i: number): number {
    return i;
  }
}
