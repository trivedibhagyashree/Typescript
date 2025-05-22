// import promptSync from 'prompt-sync';

// const prompt = promptSync();

class BankAccount {
  private accountNumber: number;
  public accHolder: string;
  private balance: number;

  constructor(accountNumber: number, accHolder: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.accHolder = accHolder;
    this.balance = initialBalance;
  }


  //Deposit
  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`${this.accHolder} deposited ${amount}`);
    //console.log(`Current Balance : ${this.balance}`);
  }

  //withdraw
  public withdraw(amount: number): void {
    if(this.balance>=amount){
        this.balance -= amount;
        console.log(`${this.accHolder} withdrew ${amount}`);
        //console.log(`Current Balance : ${this.balance}`);
    }
    else{
        console.log("Insufficient funds");
    }
  }


  //getBalance
  public getBalance(): number {
    //console.log(`The balance is ${this.balance}`);
    return this.balance;
  }
}


class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(accountNumber: number, accHolder: string, initialBalance: number, interestRate: number) {
    super(accountNumber,accHolder,initialBalance);
    this.interestRate = interestRate;
  }

  public applyInterest(): void {
    const interest = this.getBalance()*(this.interestRate/100);
    this.deposit(interest);
    console.log(`Interest of ${interest} added at rate ${this.interestRate}`);
  }
}


//Bank Account
const acc1 = new SavingsAccount(1000,"Bhagyashree",2000,2.5);
const acc2 = new SavingsAccount(2000,"Subhashree",500,1.5);
const acc3 = new SavingsAccount(3000,"Naga Sai",10,0);



acc1.deposit(500);
acc1.withdraw(200);
console.log(`Balance after withdrawal is ${acc1.getBalance()}`);
acc1.applyInterest();
console.log(`Final Balance of ${acc1.accHolder} is ${acc1.getBalance()}`);





// Add a new class SavingsAccount that extends BankAccount.
// It should have an extra property: interestRate (in %).
// Add a method applyInterest() that adds interest to balance.
// class SavingsAccount extends BankAccount {
//   private interestRate: number;
//   constructor(accountNumber: number, accountHolder: string, initialBalance: number, interestRate: number) {}
//   public applyInterest(): void {}
// }



// The constructor should initialize all properties.
// deposit(amount) should increase the balance.
// withdraw(amount) should:
// Decrease balance only if sufficient funds.
// Else log: "Insufficient balance!"
// getBalance() should return current balance.
// Enforce proper types everywhere — no any.