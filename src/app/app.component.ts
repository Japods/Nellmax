import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

// tslint:disable-next-line: variable-name
  public carrousel_img = 0;
  public carrousel = 0;
  public changeTab = 1;
  public title = 'nellmaxApp';
  public images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);




}


