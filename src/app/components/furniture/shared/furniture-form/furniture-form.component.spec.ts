import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureFormComponent } from './furniture-form.component';

describe('FurnitureFormComponent', () => {
  let component: FurnitureFormComponent;
  let fixture: ComponentFixture<FurnitureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
