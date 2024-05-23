// Chair is the abstract product interface for chairs
interface Chair {
  sitOn(): string;
}

// Sofa is the abstract product interface for sofas
interface Sofa {
  lieOn(): string;
}

// FurnitureFactory is the abstract factory interface
interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
}

// ModernChair is a concrete product that implements the Chair interface
class ModernChair implements Chair {
  sitOn(): string {
      return "Sitting on a modern chair";
  }
}

// ModernSofa is a concrete product that implements the Sofa interface
class ModernSofa implements Sofa {
  lieOn(): string {
      return "Lying on a modern sofa";
  }
}

// VictorianChair is a concrete product that implements the Chair interface
class VictorianChair implements Chair {
  sitOn(): string {
      return "Sitting on a Victorian chair";
  }
}

// VictorianSofa is a concrete product that implements the Sofa interface
class VictorianSofa implements Sofa {
  lieOn(): string {
      return "Lying on a Victorian sofa";
  }
}

// ModernFurnitureFactory is a concrete factory that creates modern furniture
class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
      return new ModernChair();
  }
  createSofa(): Sofa {
      return new ModernSofa();
  }
}

// VictorianFurnitureFactory is a concrete factory that creates Victorian furniture
class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
      return new VictorianChair();
  }
  createSofa(): Sofa {
      return new VictorianSofa();
  }
}

// Use the factories to create products
function abstractFactoryExample() {
  // factory is the factory that can be repurposed to create different products
  let factory: FurnitureFactory
  
  // Create a modern furniture factory
  factory = new ModernFurnitureFactory();
  const modernChair: Chair = factory.createChair();
  const modernSofa: Sofa = factory.createSofa();

  console.log(modernChair.sitOn()); // Output: Sitting on a modern chair
  console.log(modernSofa.lieOn());  // Output: Lying on a modern sofa

  // Create a Victorian furniture factory
  factory = new VictorianFurnitureFactory();
  const victorianChair: Chair = factory.createChair();
  const victorianSofa: Sofa = factory.createSofa();

  console.log(victorianChair.sitOn()); // Output: Sitting on a Victorian chair
  console.log(victorianSofa.lieOn());  // Output: Lying on a Victorian sofa
}

// Run the main function
abstractFactoryExample();