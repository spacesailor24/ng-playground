import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStandardModalComponent } from './custom-standard-modal.component';

describe('CustomStandardModalComponent', () => {
  let component: CustomStandardModalComponent;
  let fixture: ComponentFixture<CustomStandardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStandardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStandardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
