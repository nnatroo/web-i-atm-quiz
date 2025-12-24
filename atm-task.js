/*
================================================
 JavaScript Practical Exam — ATM System
 Rules:
 - Plain JavaScript only (no libraries)
 - Do NOT change the given object structure
 - Use console.log for output
 - Code must run without errors
================================================
*/

// ===============================
// GIVEN DATA (DO NOT MODIFY)
// ===============================
const atmAccount = {
    owner: "Nugo Natroshvili",
    pin: 1234,
    balance: 500,
    dailyLimit: 400,
    failedAttempts: 0,
    isLocked: false,
    transactions: []
};

// ===============================
// TASK 1 — AUTHENTICATION
// ===============================
// Write authenticate(account, enteredPin)
//
// Rules:
// - If account is locked → return false
// - If PIN correct → reset failedAttempts, return true
// - If PIN incorrect → increase failedAttempts
// - Lock account after 3 failed attempts

function authenticate(account, enteredPin) {
    // TODO
}

// ===============================
// TASK 2 — CHECK BALANCE
// ===============================
// Write checkBalance(account)
// Return current balance

function checkBalance(account) {
    // TODO
}

// ===============================
// TASK 3 — DEPOSIT MONEY
// ===============================
// Write deposit(account, amount)
//
// Rules:
// - amount must be positive number
// - update balance
// - store transaction:
//   { type: "DEPOSIT", amount: <amount> }
// - return updated balance

function deposit(account, amount) {
    // TODO
}

// ===============================
// TASK 4 — WITHDRAW MONEY
// ===============================
// Write withdraw(account, amount)
//
// Rules:
// - amount must be positive
// - cannot withdraw more than balance
// - cannot exceed dailyLimit (sum of withdrawals per day)
// - update balance
// - store transaction:
//   { type: "WITHDRAW", amount: <amount> }
// - if invalid → return "Transaction failed"

function withdraw(account, amount) {
    // TODO
}

// ===============================
// TASK 5 — DAILY LIMIT CALCULATION
// ===============================
// Write getTodayWithdrawTotal(account)
// Return total amount withdrawn today

function getTodayWithdrawTotal(account) {
    // TODO
}

// ===============================
// TASK 6 — TRANSACTION HISTORY
// ===============================
// Write printTransactions(account)
//
// Output format:
// 1. DEPOSIT: +200
// 2. WITHDRAW: -100

function printTransactions(account) {
    // TODO
}

// ===============================
// TASK 7 — LAST N TRANSACTIONS
// ===============================
// Write printLastTransactions(account, count)
//
// Print last <count> transactions
// If count > available, print all

function printLastTransactions(account, count) {
    // TODO
}

// ===============================
// TASK 8 — ATM FLOW
// ===============================
// Write atmMenu(account, pin)
//
// Flow example:
// - authenticate
// - show balance
// - deposit
// - withdraw
// - show balance
// - print transactions

function atmMenu(account, pin) {
    // TODO
}

// ===============================
// TEST AREA (DO NOT MODIFY)
// ===============================
atmMenu(atmAccount, 1234);
