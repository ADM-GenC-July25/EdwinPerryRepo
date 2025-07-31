import { Component, Input } from '@angular/core';
import { Bio } from '../bio/bio';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title : string = "Angular is easy"
  @Input() value: string = "Edwin"
}
