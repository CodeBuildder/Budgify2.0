import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expenseTotal'
import selectExpenses from '../selectors/expenses'

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 || expenseCount === 0 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')
    return (
        <div className="pageHeader">
            <div className="contentContainer">
                <h1 className="pageHeader-title"><span className="boldContent">{expenseCount}</span> {expenseWord} 
                    <span className="headerContent"> Today's Total: 
                        <span className="boldContent"> {formattedExpensesTotal}
                        </span>
                    </span> 
                </h1>
                <div className="pageHeader-actions">
                    <Link className="fas fa-cart-plus" id="addExpenseButton" to="/create"></Link>
                </div>
            </div>
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