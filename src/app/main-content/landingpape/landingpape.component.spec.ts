import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpapeComponent } from './landingpape.component';

describe('LandingpapeComponent', () => {
  let component: LandingpapeComponent;
  let fixture: ComponentFixture<LandingpapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpapeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
