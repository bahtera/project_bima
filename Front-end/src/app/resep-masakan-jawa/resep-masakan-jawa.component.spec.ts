import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResepMasakanJawaComponent } from './resep-masakan-jawa.component';

describe('ResepMasakanJawaComponent', () => {
  let component: ResepMasakanJawaComponent;
  let fixture: ComponentFixture<ResepMasakanJawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResepMasakanJawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResepMasakanJawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
