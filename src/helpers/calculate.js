import { EXPENSE, MAN, SHARED, WOMAN } from '../constants';

export function getCalculatedValues(items, responsible) {
  const saldos = calculateInitialSaldos(items);
  const saldo = saldos[responsible];
  const investments = calculateInvestments(saldos);

  return {
    investment: investments[responsible],
    saldo: calculateFinalSaldo(saldo, investments, responsible)
  };
}

function calculateInitialSaldos(items) {
  return {
    [MAN]: calculateInitialSaldo(items, MAN),
    [WOMAN]: calculateInitialSaldo(items, WOMAN),
    [SHARED]: calculateInitialSaldo(items, SHARED)
  };
}

function calculateInitialSaldo(items, responsible) {
  return items
    .filter(item => item.responsible === responsible)
    .reduce((saldo, { amount, itemType }) => {
      if (itemType === EXPENSE) {
        return saldo - amount;
      }

      return saldo + amount;
    }, 0);
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
