import { EXPENSE, INCOME, SALDO, MAN, SHARED, WOMAN } from '../constants'

export function getCalculatedItems(items) {
  const { saldoMan, saldoWoman, saldoShared } = calculateSaldos(items)
  const sharedInvestments = calculateSharedInvestments(saldoMan, saldoWoman, saldoShared)
  const { investmentMan, investmentWoman } = sharedInvestments
  const finalSaldos = calculateFinalSaldos(investmentMan, investmentWoman, saldoMan, saldoWoman, saldoShared)
  const { finalSaldoMan, finalSaldoWoman, finalSaldoShared } = finalSaldos

  return createCalculatedItems(investmentMan, investmentWoman, finalSaldoMan, finalSaldoWoman, finalSaldoShared)
}

function calculateSaldos(items) {
  return {
    saldoMan: calculateSaldo(items, MAN),
    saldoWoman: calculateSaldo(items, WOMAN),
    saldoShared: calculateSaldo(items, SHARED)
  }
}

function calculateSaldo(items, responsible) {
  return items
    .filter(item => item.responsible === responsible)
    .reduce((saldo, { amount, itemType }) => {
      if (itemType === EXPENSE) {
        return saldo - amount
      }

      return saldo + amount
    }, 0)
}

function calculateSharedInvestments(saldoMan, saldoWoman, saldoShared) {
  const totalSaldo = saldoMan + saldoWoman
  const sharedInvestmentNeeded = saldoShared <= 0 ? saldoShared * -1 : 0

  return {
    investmentMan: calculateSharedInvestment(saldoMan, totalSaldo, sharedInvestmentNeeded),
    investmentWoman: calculateSharedInvestment(saldoWoman, totalSaldo, sharedInvestmentNeeded)
  }
}

function calculateSharedInvestment(saldo, totalSaldo, sharedInvestmentNeeded) {
  if (saldo <= 0) {
    return 0
  }

  const investment = saldo / totalSaldo * sharedInvestmentNeeded

  if (investment > saldo) {
    return saldo
  }

  return investment
}

function calculateFinalSaldos(investmentMan, investmentWoman, saldoMan, saldoWoman, saldoShared) {
  return {
    finalSaldoMan: saldoMan - investmentMan,
    finalSaldoWoman: saldoWoman - investmentWoman,
    finalSaldoShared: saldoShared + investmentMan + investmentWoman
  }
}

function createCalculatedItems(investmentMan, investmentWoman, finalSaldoMan, finalSaldoWoman, finalSaldoShared) {
  return [
    calculatedItem(investmentMan, EXPENSE, MAN, 'Inleg gezamelijk'),
    calculatedItem(investmentWoman, EXPENSE, WOMAN, 'Inleg gezamelijk'),
    calculatedItem(investmentMan, INCOME, SHARED, 'Inleg Niels'),
    calculatedItem(investmentWoman, INCOME, SHARED, 'Inleg Peggy'),
    calculatedItem(finalSaldoMan, SALDO, MAN, 'Saldo'),
    calculatedItem(finalSaldoWoman, SALDO, WOMAN, 'Saldo'),
    calculatedItem(finalSaldoShared, SALDO, SHARED, 'Saldo')
  ]
}

function calculatedItem(amount, itemType, responsible, title) {
  return {
    amount,
    calculated: true,
    itemType,
    responsible,
    title
  }
}
