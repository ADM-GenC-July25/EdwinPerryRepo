import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDetails } from './bio-details';

describe('BioDetails', () => {
  let component: BioDetails;
  let fixture: ComponentFixture<BioDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
