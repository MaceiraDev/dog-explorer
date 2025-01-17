import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RacasComponent } from './components/racas/racas.component';
import { ImagesRacaComponent } from './components/images-raca/images-raca.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "racas",
    component: RacasComponent,
  },
  {
    path: "raca/:nome",
    component: ImagesRacaComponent,
  },
  {
    path: "sobre",
    component: SobreComponent,
  }
];
