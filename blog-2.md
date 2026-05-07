# How the Four Pillars of OOP Reduce Complexity in Large Scale TypeScript Projects

## Introduction

Large TypeScript projects often grow into many modules, services, components, and data models. As the codebase expands, the main challenge is not writing code, but managing complexity. Object Oriented Programming (OOP) helps by organizing logic into reusable and understandable structures. The four pillars of OOP Inheritance, Polymorphism, Abstraction, and Encapsulation—make systems easier to extend, test, and maintain.

## Body

### Inheritance helps reuse shared behavior

Inheritance lets one class build on another class. This reduces duplication when several objects share common data or logic.

```ts
class Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {}

  getDetails() {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  approveBudget(amount: number) {
    return `${this.name} approved ${amount}`;
  }
}
```

Here, `Manager` reuses the `name`, `salary`, and `getDetails` logic from `Employee`. When we compile this, the shared behavior stays in one place, so updates are simpler. This reduces repetition and helps keep the codebase consistent.

### Polymorphism lets different classes share the same interface

Polymorphism means different classes can be used through a common contract while still behaving differently.

```ts
abstract class PaymentMethod {
  abstract pay(amount: number): string;
}

class CardPayment extends PaymentMethod {
  pay(amount: number) {
    return `Paid ${amount} by card`;
  }
}

class CashPayment extends PaymentMethod {
  pay(amount: number) {
    return `Paid ${amount} in cash`;
  }
}

function processPayment(method: PaymentMethod, amount: number) {
  return method.pay(amount);
}
```

`processPayment` does not need to know whether the payment is by card or cash. It only depends on the shared `PaymentMethod` type. That makes the logic flexible. We can add new payment types later without rewriting the processor. This lowers coupling and makes the system easier to extend.

### Abstraction hides unnecessary details

Abstraction exposes only what other parts of the system need. It hides implementation details, which keeps the code easier to reason about.

```ts
interface StorageService {
  save(key: string, value: string): void;
  load(key: string): string | null;
}
```

This interface describes what a storage service must do, not how it does it. A project can use local storage, a database, or a cloud service behind this contract. The rest of the application works with the interface only. This simplifies architecture because high level code does not depend on low level implementation details.

### Encapsulation protects state and keeps logic inside the class

Encapsulation keeps data and the methods that operate on that data together. It also prevents outside code from changing internal state directly.

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}
```

The `balance` field is private, so other parts of the app cannot modify it directly. They must use `deposit` or `getBalance`. This protects the object from invalid state and makes bugs easier to prevent. In larger projects, encapsulation is especially valuable because it reduces accidental interference between modules.

### How the four pillars work together

The real strength of OOP comes from combining all four pillars. Inheritance reduces duplication. Polymorphism lets us swap implementations cleanly. Abstraction gives a clear contract for interaction. Encapsulation keeps internal state safe. Together, they create code that is modular, predictable, and easier to maintain as the project grows.

## Conclusion

In large scale TypeScript projects, OOP is not about making code more complicated. It is about controlling complexity. Inheritance helps reuse logic, polymorphism improves flexibility, abstraction hides unnecessary detail, and encapsulation protects state. When used carefully, these pillars create systems that are easier to scale, test, and understand.
