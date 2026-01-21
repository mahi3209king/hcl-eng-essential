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
    expect(component).toBeTruthy();  // Ensure the component is created
  });

  it('should display the initial count as 0', () => {
    const compiled = fixture.nativeElement;
    const counterHeading = compiled.querySelector('div.counter-container h1');
    expect(counterHeading.textContent).toContain('Counter: 0');  // Assert that the count is initialized to 0
  });

  it('should increment the count when increment button is clicked', () => {
    component.increment();  // Call the increment method
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    const counterHeading = compiled.querySelector('div.counter-container h1');
    expect(counterHeading.textContent).toContain('Counter: 1');  // Assert that the count is incremented
  });

  it('should decrement the count when decrement button is clicked', () => {
    component.decrement();  // Call the decrement method
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    const counterHeading = compiled.querySelector('div.counter-container h1');
    expect(counterHeading.textContent).toContain('Counter: -1');  // Assert that the count is decremented
  });

  it('should reset the count when reset button is clicked', () => {
    component.reset();  // Call the reset method
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    const counterHeading = compiled.querySelector('div.counter-container h1');
    expect(counterHeading.textContent).toContain('Counter: 0');  // Assert that the count is reset to 0
  });
});
