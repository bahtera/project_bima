import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaliComponent } from './admin-bali.component';

describe('AdminBaliComponent', () => {
  let component: AdminBaliComponent;
  let fixture: ComponentFixture<AdminBaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
