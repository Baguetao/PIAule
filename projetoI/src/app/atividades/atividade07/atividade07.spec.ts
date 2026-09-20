import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade07 } from './atividade07';

describe('Atividade07', () => {
  let component: Atividade07;
  let fixture: ComponentFixture<Atividade07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade07],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
