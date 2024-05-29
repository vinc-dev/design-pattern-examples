// Target is the interface that the client expects
interface Target {
  request(): string;
}

// Adaptee is the existing class with a different interface
class Adaptee {
  specificRequest(): string {
      return "Specific request";
  }
}

// Adapter makes Adaptee's interface compatible with the Target interface
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
      this.adaptee = adaptee;
  }

  request(): string {
      return this.adaptee.specificRequest();
  }
}

function adapterExample() {
  // The client expects a Target interface
  const adaptee = new Adaptee();
  const target: Target = new Adapter(adaptee);

  // The client can now use the adapted interface
  console.log(target.request()); // Output: Specific request
}

// Run the main function
adapterExample();