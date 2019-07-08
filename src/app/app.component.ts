import { Component } from '@angular/core';
import { appService } from '../app/app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // tslint:disable-next-line: variable-name
  public sendEmail: boolean = false;
  public showBasic: boolean = false;
  public carrousel_img = 0;
  public carrousel = 0;
  public step = 0;
  public title = 'nellmaxApp';
  public images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  public service_id = 'gmail'
  public template_id = 'template_SIL7WGGs'
  public user_id = 'user_CzQfsRMkf4K1YmlWWcMni'
  public template_params = {
    name: '',
    reply_email: '',
    message: ''
  }

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
        this.step = 0
      }, 3000);
    } else {
      this.step = this.step + 1;
    }

  }

    changeBasic(){
      this.showBasic = !this.showBasic;
    }

  
    showSendEmail(){
      this.sendEmail = !this.sendEmail;
    }


  sendForm(){
   this.template_params.name = this.name
   this.template_params.reply_email = this.reply_email
   this.template_params.message = this.message;
   console.log("This template params", this.template_params)

   this.appService.sendEmail(this.service_id,this.template_id,this.user_id,this.template_params).subscribe(response => {
    console.log("Response",response)
   })
  }


}


