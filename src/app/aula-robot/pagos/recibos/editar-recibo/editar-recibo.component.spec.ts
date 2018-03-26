import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReciboComponent } from './editar-recibo.component';

describe('EditarReciboComponent', () => {
  let component: EditarReciboComponent;
  let fixture: ComponentFixture<EditarReciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarReciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
