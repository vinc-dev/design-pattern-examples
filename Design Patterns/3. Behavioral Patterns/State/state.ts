// State interface declares methods that represent different states of the object
interface State {
  handle(): void;
}

// Concrete State classes implement the State interface and define behavior for each state
class ConcreteStateA implements State {
  public handle(): void {
      console.log('ConcreteStateA is handling the request.');
  }
}

class ConcreteStateB implements State {
  public handle(): void {
      console.log('ConcreteStateB is handling the request.');
  }
}

// Context class maintains a reference to the current state object and delegates state-specific behavior to the state object
class Context {
  private state: State;

  constructor(state: State) {
      this.state = state;
  }

  public setState(state: State): void {
      this.state = state;
  }

  public request(): void {
      this.state.handle();
  }
}

// Client code demonstrates how to use the State pattern
function stateExample() {
  const initialState = new ConcreteStateA();
  const context = new Context(initialState);

  context.request();

  const newState = new ConcreteStateB();
  context.setState(newState);

  context.request();
}

// Run the main function
stateExample();