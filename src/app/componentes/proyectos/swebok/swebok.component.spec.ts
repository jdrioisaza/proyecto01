import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwebokComponent } from './swebok.component';

describe('SwebokComponent', () => {
  let component: SwebokComponent;
  let fixture: ComponentFixture<SwebokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwebokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwebokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
