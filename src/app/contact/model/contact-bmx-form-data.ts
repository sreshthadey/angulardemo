import {TupleBmxFormData} from "ngx-bmx-components";
import {ContactBmxInput} from "./contact-bmx-input";
import {ContactBmxFormButton} from "./contact-bmx-form-button";
import { BmxFormData } from './bmx-form-data';
import {FormGroup} from "@angular/forms";

export class ContactBmxFormData{
    
    public static contactForm : BmxFormData = new TupleBmxFormData(
        'Contact Form',
		'This is a demo contact form',
		[
			ContactBmxInput.nameInput,
			ContactBmxInput.contactInput,
        ],
        ContactBmxFormButton.contactFormButton,
		{
			title: 'submit',
			classList: [],
			onSubmit: (formGroup: FormGroup) => {
				console.log(formGroup);
			},
			validateBeforeSubmit: true
		}
    )
}