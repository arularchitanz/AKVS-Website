import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; // Use this for converting Observable to Promise
import { environment } from '../../../../src/environments/environment';

=======
import emailjs from '@emailjs/browser';
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6

@Injectable({
  providedIn: 'root'
})
export class EmailService {
<<<<<<< HEAD
  private API_URL = environment.apiUrl // Replace with your API endpoint
  private API_KEY = environment.apiKey // Replace with your API key

  constructor(private http: HttpClient) {}

  async sendContactEmail(
    name: string,
    email: string,
    message: string,
    phone?: string,
    subject: string = 'AKVS New Contact Form Submission'
  ): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.API_KEY
    });

    // Generate the HTML body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>
      </div>
    `;

    const emailData = {
      to: 'contactus@abdulkalamvisionsociety.org',
      toname: 'AKVS',
      subject: subject,
      body: htmlBody
    };

    console.log('Sending email with data:', emailData);

    // Convert the Observable to a Promise and return it
    try {
      return await firstValueFrom(this.http.post<any>(this.API_URL, emailData, { headers }));
    } catch (error: any) {
      if (error.status === 0) {
        console.error('Network Error: Unable to reach the API server.');
      } else {
        console.error(`HTTP Error: ${error.status} - ${error.statusText}`);
        console.error('Error Details:', error.error);
      }
      throw new Error('Failed to send email. Please check the API server.');
=======
  private SERVICE_ID = 'service_7380rdf';
  private TEMPLATE_ID = 'template_2ql72k8';
  private PUBLIC_KEY = 'KJfX-cAGBsQgbYiqL';

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendContactEmail(
    name: string, 
    email: string, 
    message: string,
    phone?: string,
    subject: string = 'AKVS New Contact Form Submission',
    organization: string = 'AKVS'
  ): Promise<void> {
    try {
      console.log('Sending email with details:', {
        name,
        email,
        message,
        subject,
        organization
      });
      
      const result = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          to_email: 'kumararul694@gmail.com',
          from_name: name,
          from_email: 'kumararul694@gmail.com',
          subject: subject,
          organization: organization,
          user_name: name,
          user_email: email,
          user_phone: phone,  
          message: message
        }
      );
      
      console.log('Email sent successfully:', result);
    } catch (error) {
      console.error('Error details:', error);
      throw error;
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6
    }
  }
}