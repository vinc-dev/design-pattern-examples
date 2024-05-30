// Abstract class with the template method
abstract class AbstractClass {
  public templateMethod(): void {
      this.stepOne();
      this.stepTwo();
      this.stepThree();
  }

  protected abstract stepOne(): void;
  protected abstract stepTwo(): void;

  protected stepThree(): void {
      console.log('Default implementation of step three.');
  }
}

// Concrete subclasses implementing the abstract methods
class ConcreteClassA extends AbstractClass {
  protected stepOne(): void {
      console.log('ConcreteClassA - Step One');
  }

  protected stepTwo(): void {
      console.log('ConcreteClassA - Step Two');
  }

  protected stepThree(): void {
      console.log('ConcreteClassA - Custom implementation of step three.');
  }
}

class ConcreteClassB extends AbstractClass {
  protected stepOne(): void {
      console.log('ConcreteClassB - Step One');
  }

  protected stepTwo(): void {
      console.log('ConcreteClassB - Step Two');
  }
}

// Client code using the concrete subclasses
function templateMethodExample() {
  const instanceA = new ConcreteClassA();
  instanceA.templateMethod();

  console.log('---');

  const instanceB = new ConcreteClassB();
  instanceB.templateMethod();
}

// Run the main function
templateMethodExample();