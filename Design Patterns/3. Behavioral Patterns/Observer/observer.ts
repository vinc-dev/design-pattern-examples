// Subject interface declares methods for managing observers
interface SubjectInterface {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Observer interface declares the update method
interface Observer {
  update(): void;
}

// Concrete Subject class implements the Subject interface and manages observers
class ConcreteSubject implements SubjectInterface {
  private observers: Observer[] = [];
  private state: number = 0;

  public getState(): number {
      return this.state;
  }

  public setState(state: number): void {
      this.state = state;
      this.notify();
  }

  public attach(observer: Observer): void {
      this.observers.push(observer);
  }

  public detach(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
          this.observers.splice(index, 1);
      }
  }

  public notify(): void {
      for (const observer of this.observers) {
          observer.update();
      }
  }
}

// Concrete Observer class implements the Observer interface and defines update behavior
class ConcreteObserver implements Observer {
  private subject: ConcreteSubject;

  constructor(subject: ConcreteSubject) {
      this.subject = subject;
      this.subject.attach(this);
  }

  public update(): void {
      console.log('Observer updated. New state:', this.subject.getState());
  }
}

// Client code demonstrates how to use the Observer pattern
function observerExample() {
  const subject = new ConcreteSubject();
  const observer1 = new ConcreteObserver(subject);
  const observer2 = new ConcreteObserver(subject);

  subject.setState(5);

  subject.detach(observer1);

  subject.setState(10);
}

// Run the main function
observerExample();