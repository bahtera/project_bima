import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSulawesiComponent } from './admin-sulawesi.component';

describe('AdminSulawesiComponent', () => {
  let component: AdminSulawesiComponent;
  let fixture: ComponentFixture<AdminSulawesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSulawesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSulawesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
