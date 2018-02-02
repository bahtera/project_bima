import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasakanSumateraComponent } from './masakan-sumatera.component';

describe('MasakanSumateraComponent', () => {
  let component: MasakanSumateraComponent;
  let fixture: ComponentFixture<MasakanSumateraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasakanSumateraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasakanSumateraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
