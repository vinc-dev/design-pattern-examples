// Flyweight defines the interface for flyweight objects
interface Flyweight {
    operation(sharedState: string): void;
}

// ConcreteFlyweight implements the Flyweight interface and adds intrinsic state
class ConcreteFlyweight implements Flyweight {
    private intrinsicState: string;

    constructor(intrinsicState: string) {
        this.intrinsicState = intrinsicState;
    }

    operation(sharedState: string): void {
        console.log(`ConcreteFlyweight: IntrinsicState = ${this.intrinsicState}, SharedState = ${sharedState}`);
    }
}

// FlyweightFactory creates and manages flyweight objects
class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};

    constructor(initialFlyweights: string[]) {
        for (const state of initialFlyweights) {
            this.flyweights[state] = new ConcreteFlyweight(state);
        }
    }

    getFlyweight(sharedState: string): Flyweight {
        if (!(sharedState in this.flyweights)) {
            console.log('FlyweightFactory: Creating new flyweight.');
            this.flyweights[sharedState] = new ConcreteFlyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }
        return this.flyweights[sharedState];
    }

    listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`FlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

function flyweightExample() {
    const factory = new FlyweightFactory(['A', 'B', 'C', 'D', 'E']);

    factory.listFlyweights();

    const flyweight1 = factory.getFlyweight('A');
    flyweight1.operation('First call with A');

    const flyweight2 = factory.getFlyweight('B');
    flyweight2.operation('First call with B');

    const flyweight3 = factory.getFlyweight('A');
    flyweight3.operation('Second call with A');

    const flyweight4 = factory.getFlyweight('F');
    flyweight4.operation('First call with F');

    factory.listFlyweights();
}

// Run the main function
flyweightExample();