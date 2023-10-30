import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1 align="center">Formulaires reactifs</h1>
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label for="nom">Nom</label>
      <input id="nom" type="text" formControlName="nom" />
      <label for="post-nom">Post Nom</label>
      <input id="post-nom" type="text" formControlName="postNom" />
      <label for="email">email</label>
      <input id="email" type="text" formControlName="email" />
      <label for="phone">N° de telephone</label>
      <input id="phone" type="text" formArrayName="phone" />
      <div formGroupName="adresse">
        <h2>Adresse</h2>
        <label for="pays">Pays</label>
        <input type="text" id="pays" formControlName="pays" />
        <label for="ville">Ville</label>
        <input type="text" id="ville" formControlName="ville" />
        <label for="region">Region</label>
        <input type="text" id="region" formControlName="region" />
        <label for="code-postal">codePostal</label>
        <input type="text" id="code-postal" formControlName="codePostal" />
      </div>
      <div formArrayName="competences">
        <h2>Competences</h2>
        <button (click)="nouvelleCompetence()">+ Nouvelle Competence</button>
        <div *ngFor="let competence of competences.controls; let i = index">
          <label for="competence-{{ i }}">Competence n° {{ i + 1 }}</label>
          <input type="text" id="competence-{{ i }}" [formControlName]="i" />
        </div>
      </div>
      <button type="submit" [disabled]="profileForm.invalid">Soumettre</button>
      <p>Validation du formulaire {{ profileForm.valid }}</p>
      <p>{{ profileForm.value | json }}</p>
    </form>
  `,
  styles: [
    `
      form {
        width: max-content;
        margin: auto;
        * {
          display: block;
          width: 20vh;
          margin-top: 0.2rem;
          padding: 0.3rem 0;
        }
      }
    `,
  ],
})
export class FormulaireComponent {
  profileForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    postNom: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [
      Validators.pattern(/^[.\d]+$/),
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    adresse: new FormGroup({
      pays: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      codePostal: new FormControl(''),
    }),
    competences: new FormArray([new FormControl('', Validators.required)], {
      updateOn: 'change',
    }),
  });

  get competences() {
    return this.profileForm.get('competences') as FormArray;
  }

  nouvelleCompetence() {
    this.competences.push(new FormControl('', Validators.required));
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
