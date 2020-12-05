import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expenseTotal'
import selectExpenses from '../selectors/expenses'

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 || expenseCount === 0 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')
    return (
        <div>
            <h1>Currently {expenseCount} {expenseWord} Total {formattedExpensesTotal} </h1>
        </div>
    )

}

const mapStateToProps = (state) => {

    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount :  visibleExpenses.length,
        expensesTotal : selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)