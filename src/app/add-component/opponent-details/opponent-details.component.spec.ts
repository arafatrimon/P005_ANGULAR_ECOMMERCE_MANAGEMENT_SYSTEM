import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentDetailsComponent } from './opponent-details.component';

describe('OpponentDetailsComponent', () => {
  let component: OpponentDetailsComponent;
  let fixture: ComponentFixture<OpponentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
