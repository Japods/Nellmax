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



  public changeAds(val: any) {
    switch (val) {
      case 0:
        this.changeTab = 0;
        break;
      case 1:
        this.changeTab = 1;
        break;
      case 2:
        this.changeTab = 2;
        break;
      case 3:
        this.changeTab = 3;
        break;
      case 4:
        this.changeTab = 4;
        setInterval(() => {
          this.changeCarrousel();
        }, 8000);

        break;

      default:
        break;
    }
  }

  changeManualCarrousel(val: any) {
// tslint:disable-next-line: triple-equals
    if (val == 1) {
      if (this.carrousel_img === 3) {
        this.carrousel_img = 0;
      } else {
        this.carrousel_img = this.carrousel_img + 1;
      }
// tslint:disable-next-line: one-line
    }else{
      if (this.carrousel_img === 0) {
        this.carrousel_img = 3;
      } else {
        this.carrousel_img = this.carrousel_img - 1;
      }
    }
  }

  changeCarrousel() {
    if (this.carrousel_img == 3) {
      this.carrousel_img = 0
    } else {
      this.carrousel_img = this.carrousel_img + 1;
    }
  }
}
