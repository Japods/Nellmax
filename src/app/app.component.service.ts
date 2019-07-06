import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class appService {

  apiUrl = 'https://api.emailjs.com/api/v1.0/email/send'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  sendEmail(service_id, template_id, user_id, template_params): Observable<any> {

    let body = {
     service_id,
     template_id,
     user_id,
     template_params : {
      name: template_params.name,
      reply_email: template_params.reply_email,
      message: template_params.message
     }
    }

    console.log("BODDDY", body)

    return this.http.post(this.apiUrl , JSON.stringify(body), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   
    return throwError(errorMessage);
  }
}