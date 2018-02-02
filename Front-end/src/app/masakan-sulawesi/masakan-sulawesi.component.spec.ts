import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasakanSulawesiComponent } from './masakan-sulawesi.component';

describe('MasakanSulawesiComponent', () => {
  let component: MasakanSulawesiComponent;
  let fixture: ComponentFixture<MasakanSulawesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasakanSulawesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasakanSulawesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
