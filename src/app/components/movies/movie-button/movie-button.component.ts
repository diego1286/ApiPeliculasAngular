import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-button',
  templateUrl: './movie-button.component.html',
  styleUrls: ['./movie-button.component.css']
})
export class MovieButtonComponent {

  constructor(private router: Router) { }

  redirectToMoviesPage() {
  
    this.router.navigate(['/movies']);
  }

}
