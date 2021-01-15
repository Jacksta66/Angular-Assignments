import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('subscribeForm') subscribeForm: NgForm;
  submitted = false;
  showPassword = false;
  defaultSubscription = 'advanced';

  subscription = {
    email: '', password: '', subscription: ''
  };

  onSubscribe() {
    const formData = this.subscribeForm.value;
    this.submitted = true;
    this.subscription.email = formData.email;
    this.subscription.password = formData.password;
    this.subscription.subscription = formData.subscription;
    console.log(this.subscription);
    this.subscribeForm.reset();
  }

  onFormReset() {
    this.subscribeForm.reset();
  }
}
