import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasakanMalukuComponent } from './masakan-maluku.component';

describe('MasakanMalukuComponent', () => {
  let component: MasakanMalukuComponent;
  let fixture: ComponentFixture<MasakanMalukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasakanMalukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasakanMalukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
