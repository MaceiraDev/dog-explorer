import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { IBase } from '../../interfaces/IBase';
import { IRaca } from '../../interfaces/IRaca';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images-raca',
  templateUrl: './images-raca.component.html',
  styleUrls: ['./images-raca.component.css'],
  imports: [CommonModule], // Importe o CommonModule aqui
})

export class ImagesRacaComponent implements OnInit {
  nomeRaca: string = '';
  imagens: string[] = [];
  erro: string = '';
  imageZoom: string | null = null;

  zoomImage(img: string): void {
    this.imageZoom = img;
  }
  
  closeZoom(): void {
    this.imageZoom = null;
  }

  constructor(private route: ActivatedRoute, private http: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nomeRaca = params.get('nome') || '';
      if (this.nomeRaca) {
        this.carregarImagens();
      }
    });
  }

  carregarImagens(): void {
    if (this.nomeRaca) {
      this.http.fetchData(`breed/${this.nomeRaca}/images`).subscribe({
        next: (res: IBase<IRaca>) => {
          if (res.message && Array.isArray(res.message)) {
            this.imagens = res.message;
          } else {
            this.erro = 'Nenhuma imagem encontrada para esta raça.';
          }
        },
        error: (err) => {
          console.error(err);
          this.erro = 'Erro ao carregar imagens para esta raça. Tente novamente mais tarde.';
        }
      });
    }
  }
}
