import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer-service';
import { Developer } from '../developer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bio-details',
  imports: [],
  templateUrl: './bio-details.html',
  styleUrl: './bio-details.css'
})
export class BioDetails implements OnInit{
  dev : Developer | undefined
  constructor(private devService: DeveloperService, private route : ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.getDeveloper();
  }
  getDeveloper(){
    const id = String(this.route.snapshot.paramMap.get('id'))
    
    this.dev = this.devService.getDeveloperById(id)
    console.log(id)
  }
  
}
