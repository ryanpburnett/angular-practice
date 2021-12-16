import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <h1>I ran a function just for trying it out: {{ heresAFunction(1) }}
        <h2>{{ "here is the title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
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