// RemoteInterface defines the interface for the "control" part of the two class hierarchies
abstract class RemoteInterface {
  protected tv: TVInterface;

  constructor(tv: TVInterface) {
      this.tv = tv;
  }

  abstract nextChannel(): string;
}

// ConcreteRemote extends the interface defined by RemoteInterface
class ConcreteRemote extends RemoteInterface {
  nextChannel(): string {
      return `RefinedAbstraction: ${this.tv.changeChannel()}`;
  }
}

// TVInterface defines the interface for the "implementation" part of the two class hierarchies
interface TVInterface {
  changeChannel(): string;
}

// ConcreateTVA is a concrete implementation of the Implementation interface
class ConcreateTVA implements TVInterface {
  changeChannel(): string {
      return 'tv a channel changed';
  }
}

// ConcreateTVB is a concrete implementation of the Implementation interface
class ConcreateTVB implements TVInterface {
  changeChannel(): string {
      return 'tv b channel changed';
  }
}

function bridgeExample() {
  let currTv: TVInterface;
  let currRemote: RemoteInterface;

  // Use the first implementation
  currTv = new ConcreateTVA();
  currRemote = new ConcreteRemote(currTv);
  console.log(currRemote.nextChannel()); // Output: RefinedAbstraction: ConcreteImplementationA

  // Use the second implementation
  currTv = new ConcreateTVB();
  currRemote = new ConcreteRemote(currTv);
  console.log(currRemote.nextChannel()); // Output: RefinedAbstraction: ConcreteImplementationB
}

// Run the main function
bridgeExample();