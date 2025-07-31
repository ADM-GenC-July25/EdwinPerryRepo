import { Component, Input } from '@angular/core';
import { DeveloperService } from '../developer-service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Developer } from '../developer';

@Component({
  selector: 'app-bio-create',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './bio-create.html',
  styleUrl: './bio-create.css'
})
export class BioCreate {
  constructor(private devService : DeveloperService, private formBuilder : FormBuilder, private router : Router){}
  @Input()
  devForm = new FormGroup({
    firstName : new FormControl("", [Validators.required]),
    lastName : new FormControl("", [Validators.required]),
    favoriteLanguage : new FormControl("", [Validators.required]),
    yearStarted : new FormControl("", [Validators.required])
  });

  // Getter functions for form controls
  get firstName() {
    return this.devForm.get('firstName')?.value;
  }

  get lastName() {
    return this.devForm.get('lastName')?.value || '';
  }

  get favoriteLanguage() {
    return this.devForm.get('favoriteLanguage')?.value || '';
  }

  get yearStarted() {
    return this.devForm.get('yearStarted')?.value || '';
  }

  // Generate a simple hash from a string
  private generateHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  // Generate ID based on form values
  private generateId(): string {
    const combinedString = `${this.firstName}-${this.lastName}-${this.favoriteLanguage}-${this.yearStarted}`;
    return this.generateHash(combinedString);
  }

  saveDeveloper(){
    if (this.devForm.valid) {
      const formValue = this.devForm.value;
      const developer: Developer = {
        ...formValue,
        id: this.generateId()
      } as Developer;
      
      this.devService.addDeveloper(developer);
      this.router.navigate(['/bios']);
    }

  }
  
}
