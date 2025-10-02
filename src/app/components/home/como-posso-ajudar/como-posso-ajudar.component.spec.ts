import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoPossoAjudarComponent } from './como-posso-ajudar.component';

describe('ComoPossoAjudarComponent', () => {
  let component: ComoPossoAjudarComponent;
  let fixture: ComponentFixture<ComoPossoAjudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoPossoAjudarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoPossoAjudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
