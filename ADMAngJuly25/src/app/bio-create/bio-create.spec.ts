import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCreate } from './bio-create';

describe('BioCreate', () => {
  let component: BioCreate;
  let fixture: ComponentFixture<BioCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
