// Visitable interface declares a method that accepts a visitor
interface Visitable {
  accept(visitor: Visitor): void;
}

// Concrete Visitable classes implement the Visitable interface and define the accept method
class ConcreteElementA implements Visitable {
  public accept(visitor: Visitor): void {
      visitor.visitConcreteElementA(this);
  }

  public operationA(): void {
      console.log('Operation A of ConcreteElementA');
  }
}

class ConcreteElementB implements Visitable {
  public accept(visitor: Visitor): void {
      visitor.visitConcreteElementB(this);
  }

  public operationB(): void {
      console.log('Operation B of ConcreteElementB');
  }
}

// Visitor interface declares visit methods for each concrete visitable class
interface Visitor {
  visitConcreteElementA(elementA: ConcreteElementA): void;
  visitConcreteElementB(elementB: ConcreteElementB): void;
}

// Concrete Visitor class implements the Visitor interface and provides implementations for each visit method
class ConcreteVisitor implements Visitor {
  public visitConcreteElementA(elementA: ConcreteElementA): void {
      console.log('Visitor is visiting ConcreteElementA');
      console.log('Visitor is adding more logic before executing default operation');
      elementA.operationA();
  }

  public visitConcreteElementB(elementB: ConcreteElementB): void {
      console.log('Visitor is visiting ConcreteElementB');
      console.log('Visitor is validating something before executing operation');
      elementB.operationB();
      console.log('Visitor is executing more logic after operation');
  }
}

// Client code demonstrates how to use the Visitor pattern
function visitorExample() {
  const elementA = new ConcreteElementA();
  const elementB = new ConcreteElementB();
  const visitor = new ConcreteVisitor();

  elementA.accept(visitor);
  console.log('================')
  elementB.accept(visitor);
}

// Run the main function
visitorExample();