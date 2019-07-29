/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should create service', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('changeMessage method should change the value to testvalue', async(inject([DataService], (service: DataService) => {
    service.changeMessage("testvalue");
    service.currentMessage.subscribe(result => expect(result).toEqual("testvalue")); 
  })));
});
