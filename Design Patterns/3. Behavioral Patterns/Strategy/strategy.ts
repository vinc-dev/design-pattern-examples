// Strategy interface declares a method that represents the algorithm
interface Strategy {
  execute(): void;
}

// Concrete Strategy classes implement the Strategy interface and provide specific algorithm implementations
class ConcreteStrategyA implements Strategy {
  public execute(): void {
      console.log('Executing strategy A.');
  }
}

class ConcreteStrategyB implements Strategy {
  public execute(): void {
      console.log('Executing strategy B.');
  }
}

class ConcreteStrategyC implements Strategy {
  public execute(): void {
      console.log('Executing strategy C.');
  }
}

// Client class maintains a reference to the current strategy and delegates the algorithm execution to the strategy object
class Client {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
      this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy): void {
      this.strategy = strategy;
  }

  public executeStrategy(): void {
      this.strategy.execute();
  }
}

// Client code demonstrates how to use the Strategy pattern
function strategyExample() {
  const client = new Client(new ConcreteStrategyA());
  client.executeStrategy();

  client.setStrategy(new ConcreteStrategyB());
  client.executeStrategy();

  client.setStrategy(new ConcreteStrategyC());
  client.executeStrategy();
}

// Run the main function
strategyExample();