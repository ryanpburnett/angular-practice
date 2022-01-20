import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <style>
            .newStyle {
                font-size: 12px;
            }
        </style>
        <h1>I ran a function just for trying it out: {{ heresAFunction(412) }}
        <h2>{{ "here is the title: " + getTitle() }}</h2>
        <ul>
            <li class="newStyle" *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-danger" [class.active]="isActive" (click)="changeIsActive()">don't press this button!</button>
    `
})
export class CoursesComponent {
    title = "List of courses";
    isActive = false;
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    heresAFunction(x: number) {
        return x*412;
    }

    changeIsActive() {
        if(this.isActive) {
            this.isActive = false;

        }else{
            this.isActive = true;
        }

    }

}