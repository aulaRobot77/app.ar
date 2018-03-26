import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoMensualComponent } from './pago-mensual.component';

describe('PagoMensualComponent', () => {
  let component: PagoMensualComponent;
  let fixture: ComponentFixture<PagoMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
