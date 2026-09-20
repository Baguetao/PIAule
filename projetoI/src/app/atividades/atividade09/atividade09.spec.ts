import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade09 } from './atividade09';

describe('Atividade09', () => {
  let component: Atividade09;
  let fixture: ComponentFixture<Atividade09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade09],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
