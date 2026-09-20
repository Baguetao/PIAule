import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade04 } from './atividade04';

describe('Atividade04', () => {
  let component: Atividade04;
  let fixture: ComponentFixture<Atividade04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade04],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
