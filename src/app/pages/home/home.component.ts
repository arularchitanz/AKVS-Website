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

<<<<<<< HEAD
  events: any[] = [
    {
      title: 'Memorial Launch',
      date: new Date('2024-09-01'),
      description: 'Successful inauguration of new educational initiatives and programs.',
      image: 'assets/images/MemorialDay.jpg',
      type: 'current'
    },
    {
      title: 'Christmas Celebration',
      date: new Date('2024-12-25'),
      description: 'Community service and celebration bringing joy to underprivileged children.',
      image: 'assets/images/ChristmasCelebration.jpg',
      type: 'current'
    },
    {
      title: 'Blood Donation Camp',
      date: new Date('2024-10-20'),
      description: 'Successfully conducted blood donation camp with over 500 donors.',
      image: 'assets/images/BloodDonation.jpg',
      type: 'current'
    },
    {
      title: 'Diwali Celebration',
      date: new Date('2023-10-15'),
      description: 'Annual Diwali celebration with cultural programs and activities.',
      image: 'assets/images/DiwaliCelebration.jpg',
      type: 'past'
    },
    {
      title: 'National Day Observance Ceremony',
      date: new Date('2023-12-25'),
      description: 'Annual National Day ceremony celebrating patriotism and national unity.',
      image: 'assets/images/NationalDayObservanceCeremony.jpg',
      type: 'past'
    },
    {
      title: 'Inter Religious Harmony',
      date: new Date('2023-08-25'),
      description: 'Annual Inter Religious Harmony event fostering unity and understanding.',
      image: 'assets/images/InterReligiousHarmony.jpg',
      type: 'past'
    }
  ];

  getCurrentEvents(): any[] {
    return this.events.filter(event => event.type === 'current');
  }

  getPastEvents(): any[] {
    return this.events.filter(event => event.type === 'past');
  }

=======
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6
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
<<<<<<< HEAD
    if (this.contactForm.valid) {
    this.isSubmitting = true;
    try {
      await this.emailService.sendContactEmail(
          this.contactForm.value.name,
          this.contactForm.value.email,
          this.contactForm.value.message,
          this.contactForm.value.phone,
          this.contactForm.value.subject
      );
        this.successMessage = 'Thank you! Your message has been sent successfully.';
      this.contactForm.reset();
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
    } catch (error) {
        console.error('Error sending email:', error);
=======
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
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6
    } finally {
      this.isSubmitting = false;
    }
  }
}
<<<<<<< HEAD
}
=======
>>>>>>> 1b85c35bbb8566e9421bf323cbdb00a73a1b8de6
