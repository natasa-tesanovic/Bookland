import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../shared/models/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  form!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control("",[Validators.required, Validators.pattern(/^[A-ZŠĐŽČĆ][a-zšđžčć]{1,30}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{1,30})?$/)]),
      email: this.fb.control("",[Validators.required,Validators.email]),
      subject: this.fb.control("",[]),
      message: this.fb.control("",[Validators.required,Validators.minLength(1), Validators.pattern(/^[A-ZŠĐČŽĆ]{1}[\d\s\w\-\.]*$/)]),
    });
  }


  formData(){
    let formValue: Contact = this.form.getRawValue();

    let contactData: Contact = {
      name : formValue.name,
      email : formValue.email,
      subject : formValue.subject,
      message : formValue.message
    };

    return contactData;
  }

 
    onSubmit(){
      if(this.form.valid){
        let data = this.formData();
        alert('Poruka uspešno poslata!');
        this.ngOnInit();
      }
      else{
        alert("Forma nije validna! Molimo Vas da proverite šta ste uneli.");
      }
      this.form.reset();
    }


}
