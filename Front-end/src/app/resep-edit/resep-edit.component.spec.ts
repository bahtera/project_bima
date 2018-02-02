import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResepEditComponent } from './resep-edit.component';

describe('ResepEditComponent', () => {
  let component: ResepEditComponent;
  let fixture: ComponentFixture<ResepEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResepEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
