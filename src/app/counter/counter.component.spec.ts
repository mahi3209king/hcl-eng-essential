import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';  // Import CounterComponent

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]  // Import the standalone CounterComponent
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();  // Check if the component is created
  });

  it('should increment the count when increment button is clicked', () => {
    component.increment();  // Call the increment method
    fixture.detectChanges();  // Trigger change detection to update the DOM
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Counter: 1');  // Check if count is incremented
  });

  it('should decrement the count when decrement button is clicked', () => {
    component.decrement();  // Call the decrement method
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Counter: -1');  // Check if count is decremented
  });

  it('should reset the count when reset button is clicked', () => {
    component.reset();  // Call the reset method
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Counter: 0');  // Ensure count is reset to 0
  });
});
