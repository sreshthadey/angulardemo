import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-conatact-demo',
  templateUrl: './conatact-demo.component.html',
  styleUrls: ['./conatact-demo.component.css']
})
export class ConatactDemoComponent implements OnInit {

  constructor(private toastService: HotToastService) { }

  public nameFormControl: FormControl = new FormControl('',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
  ]);

  public emailFormControl: FormControl = new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.pattern(/\S+@\S+\.\S+/)
  ]);

  public PhoneNumberFormControl: FormControl = new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.pattern(/^[0-9]{6,20}$/)
  ]);

  public messageFormControl: FormControl = new FormControl('',[
        Validators.required,
	  Validators.minLength(1),
	  Validators.maxLength(700)
  ]);

  public contactDetailsForm: FormGroup = new FormGroup({
        name: this.nameFormControl,
        email: this.emailFormControl,
        phone: this.PhoneNumberFormControl,
        code: new FormControl('91'),
        message: this.messageFormControl
  });

  onsubmit(){
        if (this.nameFormControl.invalid){
          this.toastService.error('Please Provide a Name');
          return;
        }

        if (this.emailFormControl.invalid){
            this.toastService.error('Please Provide a valid email');
            return;
       }

       if (this.PhoneNumberFormControl.invalid){
            this.toastService.error('Please Provide a valid Phone Number');
            return;
       }

       if (this.messageFormControl.invalid){
            this.toastService.error('Please Provide a message');
            return;
       }

       console.log(this.nameFormControl.value);
       console.log(this.emailFormControl.value);
       console.log(this.contactDetailsForm.get('code')?.value + this.PhoneNumberFormControl.value);
       console.log(this.messageFormControl.value);
  }

  ngOnInit(): void {
  }

}
