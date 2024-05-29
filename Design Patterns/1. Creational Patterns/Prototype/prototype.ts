// Prototype is the interface that defines the clone method
interface Prototype {
  clone(): Prototype;
}

// ConcretePrototype1 is a concrete implementation of the Prototype interface
class ConcretePrototype1 implements Prototype {
  public field: string;

  constructor(field: string) {
      this.field = field;
  }

  clone(): Prototype {
      return new ConcretePrototype1(this.field);
  }

  show(): void {
      console.log(`ConcretePrototype1 with field: ${this.field}`);
  }
}

// ConcretePrototype2 is a concrete implementation of the Prototype interface
class ConcretePrototype2 implements Prototype {
  public field: number;

  constructor(field: number) {
      this.field = field;
  }

  clone(): Prototype {
      return new ConcretePrototype2(this.field);
  }

  show(): void {
      console.log(`ConcretePrototype2 with field: ${this.field}`);
  }
}

function prototypeExample() {
  // Create initial prototypes
  const prototype1: ConcretePrototype1 = new ConcretePrototype1("Prototype1");
  const prototype2: ConcretePrototype2 = new ConcretePrototype2(42);

  // Clone the prototypes
  const clone1: ConcretePrototype1 = prototype1.clone() as ConcretePrototype1;
  const clone2: ConcretePrototype2 = prototype2.clone() as ConcretePrototype2;

  // Modify the clones
  clone1.field = "Modified Prototype1";
  clone2.field = 24;

  const cloneFromClone1: ConcretePrototype1 = clone1.clone() as ConcretePrototype1;

  // Show the original prototypes and their clones
  prototype1.show(); // Output: ConcretePrototype1 with field: Prototype1
  clone1.show();     // Output: ConcretePrototype1 with field: Modified Prototype1

  prototype2.show(); // Output: ConcretePrototype2 with field: 42
  clone2.show();     // Output: ConcretePrototype2 with field: 24

  cloneFromClone1.show();
}

// Run the main function
prototypeExample();