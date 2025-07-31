import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  devs : Developer[] = []
  baseUrl : string = "https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/"
  constructor(private http : HttpClient){
    
  }
  postHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })
  getAllDevelopers() : Observable<Developer[]>{
    return this.http.get<Developer[]>(this.baseUrl + "all").pipe(
      map(developers => {this.devs = developers; return developers}),
      catchError(this.handleError<Developer[]>('getAllDevelopers', []).bind(this))
    );
  }
  addDeveloper(developer: Developer): boolean {
    this.http.post<Developer>(this.baseUrl + 'add', developer,
      { headers: this.postHeaders }).pipe(
      tap((newDev: Developer) => {
        this.devs.push(newDev);
      }),
      catchError(this.handleError<Developer>('addDeveloper'))
    ).subscribe();
 
    return true;
  }
    handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
  getDeveloperById(id:string) : Developer | undefined{
    return this.devs.find(dev => dev.id === id)
  }
  
}
