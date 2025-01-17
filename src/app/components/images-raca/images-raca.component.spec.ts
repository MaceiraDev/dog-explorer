import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesRacaComponent } from './images-raca.component';

describe('ImagesRacaComponent', () => {
  let component: ImagesRacaComponent;
  let fixture: ComponentFixture<ImagesRacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesRacaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesRacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
