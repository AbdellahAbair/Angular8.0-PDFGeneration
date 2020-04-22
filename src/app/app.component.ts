import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreatePdf';
  route: string;
  public showvidio:boolean=true;
  public showComponent:boolean=true;
  constructor(private router:Router,location: Location){
  
    //this just for the navabar display
        router.events.subscribe((val) => {
          if(location.path() != ''){
            this.route = location.path();
           
            if (this.route == "/register" || this.route == "/login") {
              this.showComponent = false
              
            
              }
              else {
                this.showComponent =true;
              }
          } 
        });
        router.events.subscribe((val) => {
          if(location.path() != ''){
            this.route = location.path();
           
            if (this.route == "/gestion_factures" ) {
              this.showvidio = false
              
            
              }
              else {
                this.showvidio =true;
              }
          } 
        });
    
      
    
    }
    gestion_factures()
    {
      this.router.navigate(['/gestion_factures']);
    }
}
