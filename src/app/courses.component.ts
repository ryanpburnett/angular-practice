import { Component } from '@angular/core'

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
    `
})
export class CoursesComponent {
    title = "List of courses"
    getTitle() {
        return this.title;
    }
    heresAFunction(x: number) {
        return x*412;
    }
    courses = ["course1", "course2", "course3"]


}