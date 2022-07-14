import { Component, OnInit } from '@angular/core';
import { BmxFormData } from '../model/bmx-form-data';
import {ContactBmxFormData} from "../model/contact-bmx-form-data";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: BmxFormData = ContactBmxFormData.contactForm;

  constructor() { }

  ngOnInit(): void {
  }

}
