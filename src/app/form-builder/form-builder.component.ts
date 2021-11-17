import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nom: 'toto',
      prenom: 'tata',
      age: 10,
      chat: this.fb.group({
        nom: '',
        couleur: '',
      }),
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  inscription() {}

  ngOnInit(): void {}
}
