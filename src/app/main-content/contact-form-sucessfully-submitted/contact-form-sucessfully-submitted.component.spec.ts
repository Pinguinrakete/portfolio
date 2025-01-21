import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSucessfullySubmittedComponent } from './contact-form-sucessfully-submitted.component';

describe('ContactFormSucessfullySubmittedComponent', () => {
  let component: ContactFormSucessfullySubmittedComponent;
  let fixture: ComponentFixture<ContactFormSucessfullySubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormSucessfullySubmittedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormSucessfullySubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
