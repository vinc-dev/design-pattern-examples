// Component defines the interface for all objects in the composition
interface Component {
  add(component: Component): void;
  remove(component: Component): void;
  getChild(index: number): Component | null;
  operation(): string;
}

// Leaf represents leaf objects in the composition
class Leaf implements Component {
  private name: string;

  constructor(name: string) {
      this.name = name;
  }

  add(component: Component): void {
      console.log("Cannot add to a leaf");
  }

  remove(component: Component): void {
      console.log("Cannot remove from a leaf");
  }

  getChild(index: number): Component | null {
      return null;
  }

  operation(): string {
      return this.name;
  }
}

// Composite represents composite objects and can have children
class Composite implements Component {
  private name: string;
  private children: Component[] = [];

  constructor(name: string) {
      this.name = name;
  }

  add(component: Component): void {
      this.children.push(component);
  }

  remove(component: Component): void {
      const index = this.children.indexOf(component);
      if (index !== -1) {
          this.children.splice(index, 1);
      }
  }

  getChild(index: number): Component | null {
      if (index >= 0 && index < this.children.length) {
          return this.children[index];
      }
      return null;
  }

  operation(): string {
      let result = `${this.name}:`;
      for (const child of this.children) {
          result += ` ${child.operation()}`;
      }
      return result;
  }
}

function compositeExample() {
  // Create leaf nodes
  const leaf1 = new Leaf("Leaf 1");
  const leaf2 = new Leaf("Leaf 2");
  const leaf3 = new Leaf("Leaf 3");

  // Create composite nodes
  const composite1 = new Composite("Composite 1");
  const composite2 = new Composite("Composite 2");

  // Build the tree structure
  composite1.add(leaf1);
  composite1.add(leaf2);
  composite2.add(leaf3);
  composite2.add(composite1);

  // Execute the operation
  console.log(composite2.operation()); // Output: Composite 2: Leaf 3 Composite 1: Leaf 1 Leaf 2
}

// Run the main function
compositeExample();