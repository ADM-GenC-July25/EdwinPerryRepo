import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bio-component',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './bio-component.html',
  styleUrl: './bio-component.css'
})
export class BioComponent {

}
