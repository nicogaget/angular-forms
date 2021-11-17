import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  userForm: FormGroup;

  @Output() userInscriptionEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nom: 'toto',
      prenom: 'tata',
      enfants: this.fb.array([]),
    });
  }

  get enfants(): FormArray {
    return this.userForm.get('enfants') as FormArray;
  }

  ajouterEnfant() {
    this.enfants.push(this.fb.control(''));
  }
  inscrire() {
    //console.log(this.userForm.value);
    this.userInscriptionEvent.emit(this.userForm.value);
  }

  ngOnInit(): void {}
}
