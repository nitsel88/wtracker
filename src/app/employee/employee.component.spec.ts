/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EmployeeComponent } from './employee.component';


class MockDataService { 
  currentMessage='Add Employee'
}

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render title in a h1 tag as Edit Employee', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Edit Employee');
  }));

    it('should render title in a h1 tag as Add Employee', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Add Employee');
  }));

it('should have button with text Update',()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#addBtn').textContent).toContain('Update');
  });
  

});
