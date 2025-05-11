import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EmailService } from '../../../app/components/services/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('customAmountInput') customAmountInput!: ElementRef;

  selectedAmount: number = 0;
  customAmount: number = 0;
  paymentMethod: string = '';
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';

  constructor(
    private emailService: EmailService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]]
    });
  }

  ngOnInit(): void {
    // Initialize default values
    this.selectedAmount = 0;
    this.customAmount = 0;
    this.paymentMethod = '';
  }

  ngAfterViewInit(): void {
  }

  // Handle quick donation button click
  handleQuickDonation(amount: number): void {
    this.selectedAmount = amount;
    this.customAmount = 0;
    (document.getElementById('customAmount') as HTMLInputElement).checked = false;
  }

  // Handle custom amount checkbox
  handleCustomAmountChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.customAmountInput.nativeElement.disabled = !checkbox.checked;

    if (checkbox.checked) {
      this.selectedAmount = 0;
    } else {
      this.customAmount = 0;
    }
  }

  // Handle custom amount input
  handleCustomAmountInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.customAmount = parseInt(input.value) || 0;
  }

  // Handle payment method selection
  handlePaymentMethod(method: string): void {
    this.paymentMethod = method;
    // Add any additional logic for payment method selection
  }

  // Handle donation submission
  handleDonation(): void {
    const amount = this.selectedAmount || this.customAmount;
    if (!amount) {
      alert('Please select a donation amount');
      return;
    }

    if (!this.paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Add donation processing logic here
    console.log('Donation amount:', amount);
    console.log('Payment method:', this.paymentMethod);
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    try {
      const formData = this.contactForm.value;
      await this.emailService.sendContactEmail(
        formData.name,
        formData.email,
        formData.message,
        formData.phone
      );
      this.successMessage = 'Message sent successfully!';
      this.contactForm.reset();
    } catch (error) {
      console.error('Error:', error);
      this.successMessage = 'Failed to send message. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
