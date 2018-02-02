import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJawaComponent } from './admin-jawa.component';

describe('AdminJawaComponent', () => {
  let component: AdminJawaComponent;
  let fixture: ComponentFixture<AdminJawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
