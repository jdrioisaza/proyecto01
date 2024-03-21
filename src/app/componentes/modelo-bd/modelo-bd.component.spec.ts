import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloBDComponent } from './modelo-bd.component';

describe('ModeloBDComponent', () => {
  let component: ModeloBDComponent;
  let fixture: ComponentFixture<ModeloBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloBDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeloBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
