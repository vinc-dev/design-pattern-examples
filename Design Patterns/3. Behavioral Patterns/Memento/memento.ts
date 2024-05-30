// Memento interface defines operations that the memento should support
interface Memento {
  getState(): string;
  getName(): string;
  getDate(): string;
}

// Originator class represents the object whose state needs to be saved and restored
class Originator {
  private state: string;

  constructor(state: string) {
      this.state = state;
  }

  public setState(state: string): void {
      this.state = state;
  }

  public getState(): string {
      return this.state;
  }

  public save(): Memento {
      return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
      this.state = memento.getState();
  }
}

// Concrete Memento class implements the Memento interface and stores the state of the Originator
class ConcreteMemento implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
      this.state = state;
      this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): string {
      return this.state;
  }

  public getName(): string {
      return `${this.date} / (${this.state}...)`;
  }

  public getDate(): string {
      return this.date;
  }
}

// Caretaker class is responsible for storing and managing mementos
class Caretaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
      this.originator = originator;
  }

  public backup(): void {
      this.mementos.push(this.originator.save());
  }

  public undo(): void {
      if (this.mementos.length === 0) return;

      const memento = this.mementos.pop();
      this.originator.restore(memento);
  }

  public showHistory(): void {
      console.log('Caretaker: Here\'s the list of mementos:');
      for (const memento of this.mementos) {
          console.log(memento.getName());
      }
  }
}

// Client code demonstrates how to use the Memento pattern
function mementoExample() {
  const originator = new Originator('Initial state');
  const caretaker = new Caretaker(originator);

  caretaker.backup();

  originator.setState('State #1');
  caretaker.backup();

  originator.setState('State #2');
  caretaker.backup();

  originator.setState('State #3');
  caretaker.backup();

  console.log('Current state:', originator.getState());

  caretaker.undo();
  console.log('Undo 1: Current state:', originator.getState());

  caretaker.undo();
  console.log('Undo 2: Current state:', originator.getState());

  caretaker.showHistory();
}

// Run the main function
mementoExample();