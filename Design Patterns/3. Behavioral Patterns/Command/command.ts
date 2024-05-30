// Command interface declares a method for executing a command
interface Command {
    execute(): void;
}

// SimpleCommand implements the Command interface and defines a simple action
class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    execute(): void {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
    }
}

// ComplexCommand implements the Command interface and defines a more complex action
class ComplexCommand implements Command {
    private receiver: Receiver;
    private a: string;
    private b: string;

    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    execute(): void {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}

// Receiver class knows how to perform the operations associated with carrying out a request
class Receiver {
    doSomething(a: string): void {
        console.log(`Receiver: Working on (${a}.)`);
    }

    doSomethingElse(b: string): void {
        console.log(`Receiver: Also working on (${b}.)`);
    }
}

// Invoker class is responsible for initiating requests and triggering command execution
class Invoker {
    private onStart: Command;
    private onFinish: Command;

    setOnStart(command: Command): void {
        this.onStart = command;
    }

    setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.onStart) {
            this.onStart.execute();
        }

        console.log('Invoker: ...doing something really important...');

        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.onFinish) {
            this.onFinish.execute();
        }
    }
}

// Client code demonstrates how to use the Command pattern
function commandExample() {
    const invoker = new Invoker();

    invoker.setOnStart(new SimpleCommand('Say Hi!'));
    const receiver = new Receiver();
    invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

    invoker.doSomethingImportant();
}

// Run the main function
commandExample();