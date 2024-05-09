import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  image1: string = "assets/images/child1.jpg";
  image2: string = "assets/images/child2.jpg";
}
