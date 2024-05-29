// ClothInterface interface defines the interface for objects that can have responsibilities added to them dynamically
interface ClothInterface {
    use(): string;
}

// Cloth is an implementation of the ClothInterface interface
class Cloth implements ClothInterface {
    use(): string {
        return "Cloth";
    }
}

// Accessory maintains a reference to a Component object and defines an interface that conforms to Component's interface
class Accessory implements ClothInterface {
    protected component: ClothInterface;

    constructor(component: ClothInterface) {
        this.component = component;
    }

    use(): string {
        return this.component.use();
    }
}

// ConcreteAccessoryA is a concrete implementation of a decorator that adds responsibilities to the component
class ConcreteAccessoryA extends Accessory {
    use(): string {
        return `${super.use()} with Accessory A`;
    }
}

// ConcreteAccessoryB is another concrete implementation of a decorator that adds responsibilities to the component
class ConcreteAccessoryB extends Accessory {
    use(): string {
        return `${super.use()} with Accessory B`;
    }
}

function decoratorExample() {
    // Create a concrete cloth
    const cloth = new Cloth();
    console.log("1. Simple Cloth");
    console.log(`RESULT: ${cloth.use()}`);

    // Decorate the component with Accessory A
    const clothWithA = new ConcreteAccessoryA(cloth);
    console.log("2. Decorate Cloth with Accessory A");
    console.log(`RESULT: ${clothWithA.use()}`);

    // Decorate the component with ConcreteDecoratorB
    const completeCloth = new ConcreteAccessoryB(clothWithA);
    console.log("3. Decorate Cloth with Accessory B");
    console.log(`RESULT: ${completeCloth.use()}`);
}

// Run the main function
decoratorExample();
