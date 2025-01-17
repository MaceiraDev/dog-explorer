import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IBase } from '../../interfaces/IBase';
import { IRaca } from '../../interfaces/IRaca';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  imagem!: IBase<IRaca>;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private http: ApiService) { }

  getRandomImg() {
    this.http.fetchData('breeds/image/random').subscribe({
      next: (res: IBase<IRaca>) => {
        this.imagem = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
