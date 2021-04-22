export function moneyRound(num: number): number {
  return Math.ceil(num * 100) / 100;
}

export function amountWithCommas(amount: string): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getMonthlyPayment(principal: number, numOfMonths: number, interest: number): number {
  return principal * interest * (Math.pow(1 + interest, numOfMonths)) / (Math.pow(1 + interest, numOfMonths) - 1);
}

export function formatAmount(amount:number): string {
  return amountWithCommas(moneyRound(amount).toFixed(2));
}

export function getTotalLoanCost(monthlyPayment: number, loanTerm: number): number {
  return monthlyPayment * loanTerm;
}

export function getInterest(totalLoanCost: number, loanAmount: number): number {
  return totalLoanCost - loanAmount;
}

export function getCollateral(loanAmount: number, loanLTV: number): number {
  return loanAmount / (loanLTV / 100);
}

export function getInterestOnlyPayment(monthlyInterestRate: number, loanAmount: number): number {
  return loanAmount * monthlyInterestRate;
}

export function getMonthlyInterestRate(interestRate: number): number {
  return interestRate / 100 / 12;
}

export function getLastPayment(loanAmount: number, interestOnlyPayment: number, loanTerm: number): number {
  return loanAmount - (interestOnlyPayment * loanTerm);
}
