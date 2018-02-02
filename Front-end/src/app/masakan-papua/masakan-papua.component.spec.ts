import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasakanPapuaComponent } from './masakan-papua.component';

describe('MasakanPapuaComponent', () => {
  let component: MasakanPapuaComponent;
  let fixture: ComponentFixture<MasakanPapuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasakanPapuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasakanPapuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
