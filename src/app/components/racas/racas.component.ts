import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IRaca } from '../../interfaces/IRaca';
import { IBase } from '../../interfaces/IBase';
import { Router } from '@angular/router'; // Importando Router

@Component({
  selector: 'app-racas',
  templateUrl: './racas.component.html',
  styleUrls: ['./racas.component.css']
})
export class RacasComponent implements OnInit {
  categorias: { nome: string, subcategorias: string[] }[] = [];
  racas!: IBase<IRaca>;

  constructor(private http: ApiService, private router: Router) { } // Injetando Router

  ngOnInit(): void {
    this.getRacas();
  }

  getRacas() {
    this.http.fetchData('breeds/list/all').subscribe({
      next: (res: IBase<IRaca>) => {
        this.racas = res;
        this.arrayRacas(res.message);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  arrayRacas(dados: IRaca): void {
    this.categorias = [];
    for (const [nome, subcategorias] of Object.entries(dados)) {
      this.categorias.push({ nome, subcategorias });
    }
  }

  navegarParaDetalhes(nome: string){
    this.router.navigate([`/raca/${nome}`]); // Usando o Router para navegar
  }
}
