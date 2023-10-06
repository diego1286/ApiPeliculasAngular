import { ActivatedRoute } from '@angular/router';
import { MovisServices } from 'src/app/services/movis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movis-list',
  templateUrl: './movis-list.component.html',
  styleUrls: ['./movis-list.component.css'],
})
export class MovisListComponent implements OnInit {
  movies!: any[];

  constructor(private moviesServices: MovisServices, 
    private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.ActivatedRoute.queryParamMap.subscribe((params: any) => {
      console.log(params.q, 'esta es la linea 13');
      const titulo = params.q; // Obtén el valor de "q" de los parámetros de consulta
      this.moviesServices.buscarPelis(titulo).subscribe((data: any) => {
        this.movies = data.results;
      });
    });
    
    
    
    
    

  }
}
