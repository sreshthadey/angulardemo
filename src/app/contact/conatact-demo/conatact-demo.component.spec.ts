import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatactDemoComponent } from './conatact-demo.component';

describe('ConatactDemoComponent', () => {
  let component: ConatactDemoComponent;
  let fixture: ComponentFixture<ConatactDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConatactDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatactDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
