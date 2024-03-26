import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Light1Component } from './light1.component';

describe('Light1Component', () => {
  let component: Light1Component;
  let fixture: ComponentFixture<Light1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Light1Component]
    });
    fixture = TestBed.createComponent(Light1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
