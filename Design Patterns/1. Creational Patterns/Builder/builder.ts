// Product represents the object being constructed
class Product {
  firstComplicatedPart: string;
  secondComplicatedPart: number;

  constructor() {
      this.firstComplicatedPart = '';
      this.secondComplicatedPart = 0;
  }
}

// Builder is the interface that defines the methods for building the product
interface Builder {
  buildFirstPart(part1: string): Builder;
  buildSecondPart(part2: number): Builder;
  getProduct(): Product;
}

// ConcreteBuilder implements the Builder interface
class ProductBuilder implements Builder {
  private product: Product;

  constructor() {
      this.product = new Product();
  }

  buildFirstPart(part1: string): Builder {
      this.product.firstComplicatedPart = part1;
      return this;
  }

  buildSecondPart(part2: number): Builder {
      this.product.secondComplicatedPart = part2;
      return this;
  }

  getProduct(): Product {
      return this.product;
  }
}

// Director is responsible for using the builder to construct the product
class Director {
  private builder: Builder;

  constructor(builder: Builder) {
      this.builder = builder;
  }

  produce(): Product {
      this.builder = this.builder.buildFirstPart('Default Part 1');
      // calling other complicated business logic
      this.builder = this.builder.buildSecondPart(42);
      return this.builder.getProduct();
  }
}

// Main function to demonstrate usage
function builderExample() {
  const productBuilder: Builder = new ProductBuilder();

  // Build the product using the builder directly
  const product: Product = productBuilder.buildFirstPart('Custom Part 1').buildSecondPart(10).getProduct();

  console.log('Product created directly:', product);

  // Alternatively, use a Director to produce the product
  const director: Director = new Director(productBuilder);
  const productFromDirector: Product = director.produce();

  console.log('Product created via Director:', productFromDirector);
}

// Run the main function
builderExample();