import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKalimantanComponent } from './admin-kalimantan.component';

describe('AdminKalimantanComponent', () => {
  let component: AdminKalimantanComponent;
  let fixture: ComponentFixture<AdminKalimantanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKalimantanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKalimantanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
