// Subject defines the common operations that both the RealSubject and the Proxy will implement
interface Subject {
    request(): void;
}

// RealSubject implements the Subject interface and defines the actual object that the proxy represents
class RealSubject implements Subject {
    request(): void {
        console.log('RealSubject: Handling request.');
    }
}

// TheProxy implements the Subject interface and controls access to the RealSubject
class TheProxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');
        // Add real access check logic here
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
        // Add logging logic here
    }
}

function proxyExample() {
    console.log('Client: Executing the client code with a real subject:');
    const realSubject = new RealSubject();
    realSubject.request();

    console.log('');

    console.log('Client: Executing the same client code with a proxy:');
    const proxy = new TheProxy(realSubject);
    proxy.request();
}

// Run the main function
proxyExample();