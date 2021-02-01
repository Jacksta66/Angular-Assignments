import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  newProjectForm: FormGroup;
  forbiddenNames = ['Test', 'testing'];

  ngOnInit() {
    this.newProjectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.forbiddenProjectNames.bind(this)),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical', Validators.required)
    });
  }

  // Upon submitting the form, simply print the value to the console
  onSubmit() {
    console.log(`New project form submitted: ${JSON.stringify(this.newProjectForm.value)}`);
    this.onReset();
  }

  onReset() {
    this.newProjectForm.reset();
  }

  // Add your own Validator which doesn't allow "Test" as a Project Name.
  // forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbiddenNames.indexOf(control.value) !== -1) {
  //     return {'projectNameIsForbidden': true};
  //   }
  //   return null;
  // }

  // Also implement that Validator as an async Validator (replace the other one)
  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      // simulate call to backend
      setTimeout(() => {
        if (this.forbiddenNames.indexOf(control.value) !== -1) {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }


}
