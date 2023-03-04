import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFullSummeryComponent } from './case-full-summery.component';

describe('CaseFullSummeryComponent', () => {
  let component: CaseFullSummeryComponent;
  let fixture: ComponentFixture<CaseFullSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseFullSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseFullSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
