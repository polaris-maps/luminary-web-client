import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNotificationComponent } from './individual-notification.component';

describe('IndividualNotificationComponent', () => {
  let component: IndividualNotificationComponent;
  let fixture: ComponentFixture<IndividualNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
