import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProposals } from './service-proposals';

describe('ServiceProposals', () => {
  let component: ServiceProposals;
  let fixture: ComponentFixture<ServiceProposals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProposals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProposals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
