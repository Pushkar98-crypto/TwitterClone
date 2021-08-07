import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconStepModalComponent } from './secon-step-modal.component';

describe('SeconStepModalComponent', () => {
  let component: SeconStepModalComponent;
  let fixture: ComponentFixture<SeconStepModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeconStepModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconStepModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
