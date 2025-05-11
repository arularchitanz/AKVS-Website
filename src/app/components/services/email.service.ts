import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
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
    }
  }
}