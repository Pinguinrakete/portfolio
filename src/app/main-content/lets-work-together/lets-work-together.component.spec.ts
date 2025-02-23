import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsWorkTogetherComponent } from './lets-work-together.component';

describe('LetsWorkTogetherComponent', () => {
  let component: LetsWorkTogetherComponent;
  let fixture: ComponentFixture<LetsWorkTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsWorkTogetherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetsWorkTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
