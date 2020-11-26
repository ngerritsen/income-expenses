import { EXPENSE, INCOME, MAN, SHARED, WOMAN } from '../constants';

export function calculateSummary(items, responsible) {
  const saldos = calculateInitialSaldos(items);
  const saldo = saldos[responsible];
  const investments = calculateInvestments(saldos);

  return {
    investment: investments[responsible],
    totalIncome: calculateTotal(items, responsible, INCOME),
    totalExpense: calculateTotal(items, responsible, EXPENSE),
    investmentMan: investments[MAN],
    investmentWoman: investments[WOMAN],
    saldo: calculateFinalSaldo(saldo, investments, responsible)
  };
}

function calculateTotal(items, responsible, itemType) {
  return items
    .filter(item => item.itemType === itemType && item.responsible === responsible)
    .reduce((total, item) => item.amount + total, 0)
}

function calculateInitialSaldos(items) {
  return {
    [MAN]: calculateInitialSaldo(items, MAN),
    [WOMAN]: calculateInitialSaldo(items, WOMAN),
    [SHARED]: calculateInitialSaldo(items, SHARED)
  };
}

function calculateInitialSaldo(items, responsible) {
  return calculateTotal(items, responsible, INCOME) - calculateTotal(items, responsible, EXPENSE);
}

function calculateFinalSaldo(saldo, investments, responsible) {
  if (responsible === SHARED) {
    return saldo + investments[MAN] + investments[WOMAN];
  }

  return saldo - investments[responsible];
}

function calculateInvestments(saldos) {
  return {
    [MAN]: calculateInvestment(saldos, MAN),
    [WOMAN]: calculateInvestment(saldos, WOMAN),
  };
}

function calculateInvestment(saldos, responsible) {
  const totalSaldo = saldos[MAN] + saldos[WOMAN];
  const sharedInvestmentNeeded = getNegativeAmount(saldos[SHARED]);
  const saldo = saldos[responsible];

  if (saldo <= 0) {
    return 0;
  }

  const investment = saldo / totalSaldo * sharedInvestmentNeeded;

  if (investment > saldo) {
    return saldo;
  }

  return investment;
}

function getNegativeAmount(number) {
  return number < 0 ? number * -1 : 0;
}
