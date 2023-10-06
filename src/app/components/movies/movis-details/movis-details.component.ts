import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovisServices} from 'src/app/services/movis.service';

@Component({
  selector: 'app-movis-details',
  templateUrl: './movis-details.component.html',
  styleUrls: ['./movis-details.component.css']
})
export class MovisDetailsComponent  implements OnInit{

  movie: any;
  constructor(private moviesServices: MovisServices, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params : any)=>{
      console.log(params.movieId, 'esta es la linea 26')
      this.moviesServices.getMovieById(params.movieId).subscribe((response: any)=>{
        this.movie= response;
        console.log(this.movie, 'esta es la peli detalles 29 ')
      })
    })

 
      
  }

}
