class Singleton {
  // The private static instance field to hold the single instance
  private static instance: Singleton;

  // Private constructor to prevent direct instantiation
  private constructor() {
      // Initialization code
      console.log("complicated instance constructed")
  }

  // The public static method to get the instance of the Singleton
  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }
      console.log("returning instance")
      return Singleton.instance;
  }

  // Example method to demonstrate functionality
  public someMethod(): void {
      console.log("Singleton instance method called");
  }
}

function singletonExample() {
  // Get the Singleton instance and call a method on it
  const singleton1 = Singleton.getInstance();
  singleton1.someMethod(); // Output: Singleton instance method called

  // Get the Singleton instance again and call a method on it
  const singleton2 = Singleton.getInstance();
  singleton2.someMethod(); // Output: Singleton instance method called

  // Check if both instances are the same
  console.log(singleton1 === singleton2); // Output: true
}

// Run the main function
singletonExample();
