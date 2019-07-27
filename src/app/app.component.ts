import { Component } from '@angular/core';
import { appService } from '../app/app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // tslint:disable-next-line: variable-name
  public range = 0;
  public sendCotization = false;
  public sendEmail = false;
  public showBasic = false;
  public carrousel_img = 0;
  public carrousel = 0;
  public step = 0;
  public title = 'nellmaxApp';
  public images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  public service_id = 'gmail';
  public template_id = 'template_SIL7WGGs';
  public user_id = 'user_CzQfsRMkf4K1YmlWWcMni';
  public template_params = {
    name: '',
    reply_email: '',
    message: ''
  };

  public name: any;
  public reply_email: any;
  public message: any;


  constructor(public appService: appService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.changeTab();
    }, 5000);
  }


  changeTab() {
    if (this.step == 2) {
      setTimeout(() => {
        this.step = 0;
      }, 3000);
    } else {
      this.step = this.step + 1;
    }
    if (this.carrousel_img == 2) {
      setTimeout(() => {
        this.carrousel_img = 0;
      }, 3000);
    } else {
      this.carrousel_img = this.carrousel_img + 1;
    }

  }

  changeJobs(val: any) {
    if (val == 0) {
      this.step = this.step + 1;
      if (this.step == 3) {
        this.step = 0;
      }
    } else {
      this.step = this.step - 1;
      if (this.step == 0) {
        this.step = 2;
      }
    }
  }


  changeCarrousel(val: any) {
    if (val == 0) {
      this.carrousel_img = this.carrousel_img + 1;
      if (this.carrousel_img == 3) {
        this.carrousel_img = 0;
      }
    } else {
      this.carrousel_img = this.carrousel_img - 1;
      if (this.carrousel_img == 0) {
        this.carrousel_img = 2;
      }
    }
  }

  showPops(val: any) {
    switch (val) {
      case 0:
        if (this.sendCotization == true) {
          this.sendCotization = false;
        }
        this.sendEmail = !this.sendEmail;
        break;
      case 1:
        if (this.sendEmail == true) {
          this.sendEmail = false;
        }
        this.sendCotization = !this.sendCotization;

        console.log('Send', this.sendCotization);

        break;

      default:
        break;
    }
  }





  sendForm() {
    this.template_params.name = this.name;
    this.template_params.reply_email = this.reply_email;
    this.template_params.message = this.message;
    console.log('This template params', this.template_params);

    this.appService.sendEmail(this.service_id, this.template_id, this.user_id, this.template_params).subscribe(response => {
      console.log('Response', response);
    });
  }
}