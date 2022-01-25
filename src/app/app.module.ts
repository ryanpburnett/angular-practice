import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { SillyComponent } from './silly/silly.component';
import { TestComponent } from './test.component';
import { PancakesComponent } from './pancakes/pancakes.component';
import { NewGeneratedComponentComponent } from './new-generated-component/new-generated-component.component';
import { CoursesService } from './courses.service';
import { EmailService } from './email.service';
import { DannyBoyComponent } from './danny-boy/danny-boy.component';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent,
    TestComponent,
    SillyComponent,
    PancakesComponent,
    NewGeneratedComponentComponent,
    DannyBoyComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
