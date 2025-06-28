import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'; // Use this for converting Observable to Promise
import { environment } from '../../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
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
    }
  }
}