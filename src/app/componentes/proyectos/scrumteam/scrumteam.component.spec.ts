import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCRUMTeamComponent } from './scrumteam.component';

describe('ScrumteamComponent', () => {
  let component: SCRUMTeamComponent;
  let fixture: ComponentFixture<SCRUMTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCRUMTeamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SCRUMTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
