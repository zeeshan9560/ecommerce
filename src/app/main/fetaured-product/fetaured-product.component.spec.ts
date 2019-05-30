import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetauredProductComponent } from './fetaured-product.component';

describe('FetauredProductComponent', () => {
  let component: FetauredProductComponent;
  let fixture: ComponentFixture<FetauredProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetauredProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetauredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
