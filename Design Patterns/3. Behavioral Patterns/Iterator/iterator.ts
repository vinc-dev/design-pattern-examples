// Iterator interface declares methods for traversing the collection
interface IteratorInterface<T> {
    current(): T;
    next(): T;
    key(): number;
    valid(): boolean;
    rewind(): void;
    iterate(): void;
}

// Aggregator interface declares a method to get the iterator
interface Aggregator<T> {
    getIterator(): IteratorInterface<T>;
}

// Concrete Iterator class implements the Iterator interface
class ConcreteIterator<T> implements IteratorInterface<T> {
    private collection: ConcreteCollection<T>;
    private position: number = 0;

    constructor(collection: ConcreteCollection<T>) {
        this.collection = collection;
    }

    public current(): T {
        return this.collection.getItems()[this.position];
    }

    public next(): T {
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    public key(): number {
        return this.position;
    }

    public valid(): boolean {
        return this.position < this.collection.getCount();
    }

    public rewind(): void {
        this.position = 0;
    }

    public iterate(): void {
        while (this.valid()) {
            console.log(this.current());
            this.next();
        }
    }
}

// Concrete Collection class implements the Aggregator interface
class ConcreteCollection<T> implements Aggregator<T> {
    private items: T[] = [];

    public getItems(): T[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: T): void {
        this.items.push(item);
    }

    public getIterator(): IteratorInterface<T> {
        return new ConcreteIterator<T>(this);
    }
}

// Client code demonstrates how to use the Iterator pattern
function iteratorExample() {
    const collection = new ConcreteCollection<string>();
    collection.addItem('First');
    collection.addItem('Second');
    collection.addItem('Third');

    console.log('Iterating over collection:');
    collection.getIterator().iterate();
}

// Run the main function
iteratorExample();