import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactsection',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contactsection.html',
  styleUrl: './contactsection.scss',
})
export class Contactsection {
  private readonly formBuilder = inject(FormBuilder);

  emailHover = false;
  phoneHover = false;

  sending = false;
  submitted = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  sendMailForm = this.formBuilder.group({
    senderName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue],
  });

  isInvalid(controlName: string): boolean {
    const control = this.sendMailForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  isValid(controlName: string): boolean {
    const control = this.sendMailForm.get(controlName);
    return !!control && control.valid && (control.touched || control.dirty);
  }

  emailErrorMessage(): string {
    const control = this.sendMailForm.get('email');
    if (control?.hasError('required')) return 'Your email is required.';
    if (control?.hasError('email')) return 'Please enter a valid email address.';
    return '';
  }

  async submitsendMailForm() {
    this.submitted = true;

    if (this.sendMailForm.invalid) {
      this.sendMailForm.markAllAsTouched();
      return;
    }

    const { senderName, email, message } = this.sendMailForm.value;

    this.sending = true;
    this.submitStatus = 'idle';

    try {
      const httpResponse = await fetch('/contact-form-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: senderName, email, message }),
      });

      const result = await httpResponse.json();

      if (result.success) {
        this.submitStatus = 'success';
        this.submitted = false;
        this.sendMailForm.reset({ senderName: '', email: '', message: '', privacy: false });
      } else {
        this.submitStatus = 'error';
      }
    } catch {
      this.submitStatus = 'error';
    } finally {
      this.sending = false;
    }
  }
}
