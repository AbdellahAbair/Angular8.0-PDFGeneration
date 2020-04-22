import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GestionFacturesComponent } from './gestion-factures/gestion-factures.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'Accueil',component: AppComponent},
  {path: 'gestion_factures', component: GestionFacturesComponent},
  
  
]
@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes) ,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      AppComponent ,
      GestionFacturesComponent 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
