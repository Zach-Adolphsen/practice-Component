import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './data/course-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice-Component';
  csci160: Course = COURSES[0];
  csci161: Course = COURSES[1];
  csci213: Course = COURSES[2];
  //csci313: Course = COURSES[3];
  //csci222: Course = COURSES[4];
  //csci374: Course = COURSES[5];
}
