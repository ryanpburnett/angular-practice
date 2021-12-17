import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { SillyComponent } from './silly.component';
import { TestComponent } from './test.component';
import { PancakesComponent } from './pancakes/pancakes.component';
import { NewGeneratedComponentComponent } from './new-generated-component/new-generated-component.component';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent,
    TestComponent,
    SillyComponent,
    PancakesComponent,
    NewGeneratedComponentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
