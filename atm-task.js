/*
========================================
 JavaScript Practical Task — ATM System
 Rules:
 - Use plain JavaScript only
 - No libraries, no npm
 - Do NOT change the given object structure
 - Use console.log for output
 - Code must run without errors
========================================
*/

// ===============================
// GIVEN DATA (DO NOT MODIFY)
// ===============================
const atmAccount = {
    owner: "Nugo Natroshvili",
    pin: 1234,
    balance: 500,
    transactions: []
};

// ===============================
// TASK 1 — AUTHENTICATION
// ===============================
// Write a function authenticate(account, enteredPin)
// Return true if PIN matches, otherwise false

function authenticate(account, enteredPin) {
    // TODO
}

// ===============================
// TASK 2 — CHECK BALANCE
// ===============================
// Write a function checkBalance(account)
// Return current balance

function checkBalance(account) {
    // TODO
}

// ===============================
// TASK 3 — DEPOSIT MONEY
// ===============================
// Write a function deposit(account, amount)
//
// Rules:
// - amount must be a positive number
// - update account balance
// - store transaction:
//   { type: "DEPOSIT", amount: <amount> }
// - return updated balance

function deposit(account, amount) {
    // TODO
}

// ===============================
// TASK 4 — WITHDRAW MONEY
// ===============================
// Write a function withdraw(account, amount)
//
// Rules:
// - amount must be positive
// - cannot withdraw more than balance
// - update account balance
// - store transaction:
//   { type: "WITHDRAW", amount: <amount> }
// - if invalid, return "Transaction failed"

function withdraw(account, amount) {
    // TODO
}

// ===============================
// TASK 5 — TRANSACTION HISTORY
// ===============================
// Write a function printTransactions(account)
//
// Output example:
// 1. DEPOSIT: +200
// 2. WITHDRAW: -100

function printTransactions(account) {
    // TODO
}

// ===============================
// FINAL TASK
// ===============================
// Write a function atmMenu(account, pin)
// Simulate ATM flow using function calls
// (no prompt required, hardcoded calls allowed)

function atmMenu(account, pin) {
    // TODO
    // console.log("=== ATM START ===");
    // if (!authenticate(account, pin)) {
    //     console.log("Wrong PIN");
    //     return;
    // }
    //
    // console.log("PIN correct");
    // ...
}

// ===============================
// TEST AREA (DO NOT MODIFY)
// ===============================
atmMenu(atmAccount, 1234);
