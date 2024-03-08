import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosDeVidaComponent } from './ciclos-de-vida.component';

describe('CiclosDeVidaComponent', () => {
  let component: CiclosDeVidaComponent;
  let fixture: ComponentFixture<CiclosDeVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiclosDeVidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiclosDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
