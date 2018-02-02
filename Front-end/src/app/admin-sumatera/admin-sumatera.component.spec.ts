import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSumateraComponent } from './admin-sumatera.component';

describe('AdminSumateraComponent', () => {
  let component: AdminSumateraComponent;
  let fixture: ComponentFixture<AdminSumateraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSumateraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSumateraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
