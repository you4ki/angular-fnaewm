import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAleartsComponent } from './product-alearts.component';

describe('ProductAleartsComponent', () => {
  let component: ProductAleartsComponent;
  let fixture: ComponentFixture<ProductAleartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAleartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAleartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
