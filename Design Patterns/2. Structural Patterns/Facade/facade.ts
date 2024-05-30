// SubsystemA is a part of the complex system
class SubsystemA {
    operationA1(): string {
        return "SubsystemA: Ready!\n";
    }

    operationA2(): string {
        return "SubsystemA: Go!\n";
    }
}

// SubsystemB is another part of the complex system
class SubsystemB {
    operationB1(): string {
        return "SubsystemB: Get ready!\n";
    }

    operationB2(): string {
        return "SubsystemB: Fire!\n";
    }
}

// Facade provides a simplified interface to the complex subsystems
class Facade {
    protected subsystemA: SubsystemA;
    protected subsystemB: SubsystemB;

    constructor(subsystemA?: SubsystemA, subsystemB?: SubsystemB) {
        this.subsystemA = subsystemA || new SubsystemA();
        this.subsystemB = subsystemB || new SubsystemB();
    }

    operation(): string {
        let result = "Facade initializes subsystems:\n";
        result += this.subsystemA.operationA1();
        result += this.subsystemB.operationB1();
        result += "Facade orders subsystems to perform the action:\n";
        result += this.subsystemA.operationA2();
        result += this.subsystemB.operationB2();
        return result;
    }
}

function facadeExample() {
    const subsystemA = new SubsystemA();
    const subsystemB = new SubsystemB();
    const facade = new Facade(subsystemA, subsystemB);
    console.log(facade.operation());
}

// Run the main function
facadeExample();