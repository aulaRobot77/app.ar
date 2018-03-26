import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlumnoComponent } from './buscar-alumno.component';

describe('BuscarAlumnoComponent', () => {
  let component: BuscarAlumnoComponent;
  let fixture: ComponentFixture<BuscarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
