import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasakanJawaComponent } from './masakan-jawa.component';

describe('MasakanJawaComponent', () => {
  let component: MasakanJawaComponent;
  let fixture: ComponentFixture<MasakanJawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasakanJawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasakanJawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
