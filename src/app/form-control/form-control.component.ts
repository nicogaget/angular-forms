import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  voitureForm: FormGroup;
  newVoitureForm: FormGroup;
  constructor() {
    this.voitureForm = new FormGroup({
      marque: new FormControl(''),
      couleur: new FormControl(''),
      prix: new FormControl(0),
    });
    this.newVoitureForm = new FormGroup({
      marque: new FormControl(''),
      couleur: new FormControl(''),
      prix: new FormControl(0),
      kilo: new FormControl(12000),
    });
  }
  envoyerInfos() {
    console.log(this.voitureForm.value);
    this.newVoitureForm.patchValue(this.voitureForm);
  }
  ajouterVoiture() {
    console.log(this.newVoitureForm.value);
  }

  ngOnInit(): void {}
}
