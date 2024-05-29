// Car is the interface that defines the behavior of objects created by the factory method
interface Car {
  use(): string;
}

// ConcreteCarA is a concrete implementation of the Car interface
class ConcreteCarA implements Car {
  use(): string {
      return "Using Car A";
  }
}

// ConcreteCarB is a concrete implementation of the Car interface
class ConcreteCarB implements Car {
  use(): string {
      return "Using Car B";
  }
}

// Creator is the interface that defines the factory method
interface Creator {
  factoryMethod(): Car;
}

// ConcreteCreatorA is a concrete implementation of the Creator interface that creates ConcreteCarA
class ConcreteCreatorA implements Creator {
  factoryMethod(): Car {
      return new ConcreteCarA();
  }
}

// ConcreteCreatorB is a concrete implementation of the Creator interface that creates ConcreteCarB
class ConcreteCreatorB implements Creator {
  factoryMethod(): Car {
      return new ConcreteCarB();
  }
}

function factoryMethodExample() {
  let creator: Creator;

  // Use ConcreteCreatorA to create a Car
  creator = new ConcreteCreatorA();
  let carA: Car = creator.factoryMethod();
  console.log(carA.use()); // Output: Using Car A

  // Use ConcreteCreatorB to create a Car
  creator = new ConcreteCreatorB();
  let carB: Car = creator.factoryMethod();
  console.log(carB.use()); // Output: Using Car B
}

// Run the main function
factoryMethodExample();