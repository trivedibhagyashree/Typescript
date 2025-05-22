// import promptSync from 'prompt-sync';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const prompt = promptSync();
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accHolder, initialBalance) {
        this.accountNumber = accountNumber;
        this.accHolder = accHolder;
        this.balance = initialBalance;
    }
    //Deposit
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("".concat(this.accHolder, " deposited ").concat(amount));
        //console.log(`Current Balance : ${this.balance}`);
    };
    //withdraw
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("".concat(this.accHolder, " withdrew ").concat(amount));
            //console.log(`Current Balance : ${this.balance}`);
        }
        else {
            console.log("Insufficient funds");
        }
    };
    //getBalance
    BankAccount.prototype.getBalance = function () {
        //console.log(`The balance is ${this.balance}`);
        return this.balance;
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, accHolder, initialBalance, interestRate) {
        var _this = _super.call(this, accountNumber, accHolder, initialBalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.applyInterest = function () {
        var interest = this.getBalance() * (this.interestRate / 100);
        this.deposit(interest);
        console.log("Interest of ".concat(interest, " added at rate ").concat(this.interestRate));
    };
    return SavingsAccount;
}(BankAccount));
//Bank Account
var acc1 = new SavingsAccount(1000, "Bhagyashree", 2000, 2.5);
var acc2 = new SavingsAccount(2000, "Subhashree", 500, 1.5);
var acc3 = new SavingsAccount(3000, "Naga Sai", 10, 0);
acc1.deposit(500);
acc1.withdraw(200);
console.log("Balance after withdrawal is ".concat(acc1.getBalance()));
acc1.applyInterest();
console.log("Final Balance of ".concat(acc1.accHolder, " is ").concat(acc1.getBalance()));
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
