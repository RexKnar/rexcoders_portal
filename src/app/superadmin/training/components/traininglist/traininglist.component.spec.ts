import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininglistComponent } from './traininglist.component';

describe('TraininglistComponent', () => {
  let component: TraininglistComponent;
  let fixture: ComponentFixture<TraininglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraininglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraininglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
