import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade01 } from './atividade01';

describe('Atividade01', () => {
  let component: Atividade01;
  let fixture: ComponentFixture<Atividade01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade01],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
