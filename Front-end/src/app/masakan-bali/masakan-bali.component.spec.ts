import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasakanBaliComponent } from './masakan-bali.component';

describe('MasakanBaliComponent', () => {
  let component: MasakanBaliComponent;
  let fixture: ComponentFixture<MasakanBaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasakanBaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasakanBaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
