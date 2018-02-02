import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMalukuComponent } from './admin-maluku.component';

describe('AdminMalukuComponent', () => {
  let component: AdminMalukuComponent;
  let fixture: ComponentFixture<AdminMalukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMalukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMalukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
