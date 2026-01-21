import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial count as 0', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Counter: 0');
  });

  it('should increment count when increment button is clicked', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement count when decrement button is clicked', () => {
    component.increment(); // increase to 1
    component.decrement();
    expect(component.count).toBe(0);
  });

  it('should reset count when reset button is clicked', () => {
    component.increment(); // increase to 1
    component.reset();
    expect(component.count).toBe(0);
  });
});
