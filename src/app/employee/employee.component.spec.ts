/* tslint:disable:no-unused-variable */
import { inject, async, ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { DataService } from '../data.service';
import { of } from 'rxjs';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let testBedService: any;
  const mockService = {
    currentMessage: of("Add Employee"),
  };

  beforeEach(async(() => {

     TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [{ provide: DataService, useValue: mockService }]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag as Add Employee', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Add Employee');
  }));

  it('should have button with text Add', async(()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#addBtn').textContent).toContain('Add');
  })); 
});
