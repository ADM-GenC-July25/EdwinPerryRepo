import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { CommonModule } from '@angular/common';
import { DeveloperService } from '../developer-service';
import { RouterLink, RouterModule } from '@angular/router';
import { async } from 'rxjs';

@Component({
  selector: 'app-bio',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './bio.html',
  styleUrl: './bio.css',
  standalone: true
})
export class Bio implements OnInit{
  dev! : Developer[];
  constructor(private devService : DeveloperService){
    this.devService.getAllDevelopers().subscribe(
      response => this.dev = response
    )
    
  }
  showConsole(){
    console.log(this.dev)
  }
  loadDeveloper(){
    // this.dev = [new Developer("Edwin", "Perry", "C++", 2023),
    //   new Developer("Jane", "Doe", "Java", 2024)]
  }
  ngOnInit(): void {
      // this.loadDeveloper();
  }
}
