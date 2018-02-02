import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPapuaComponent } from './admin-papua.component';

describe('AdminPapuaComponent', () => {
  let component: AdminPapuaComponent;
  let fixture: ComponentFixture<AdminPapuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPapuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPapuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
