import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JawaComponent } from './jawa.component';

describe('JawaComponent', () => {
  let component: JawaComponent;
  let fixture: ComponentFixture<JawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
