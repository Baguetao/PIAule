import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade03 } from './atividade03';

describe('Atividade03', () => {
  let component: Atividade03;
  let fixture: ComponentFixture<Atividade03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade03],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
