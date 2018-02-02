import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasakanKalimantanComponent } from './masakan-kalimantan.component';

describe('MasakanKalimantanComponent', () => {
  let component: MasakanKalimantanComponent;
  let fixture: ComponentFixture<MasakanKalimantanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasakanKalimantanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasakanKalimantanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
