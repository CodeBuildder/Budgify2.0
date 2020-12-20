import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="contentContainer">
      <div className="listHeader">
        <div className="showMobile">Expenses</div>
        <div className="showDesktop">Expense</div>
        <div className="showDesktop">Amount</div>
      </div>
      <div className="listBody">
        {
          props.expenses.length === 0 ? (
            <div className = "listItem listItem-message">
              <span>No expenses</span>
            </div>
          ) : (
              props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
              })
            )
        }
      </div>
    </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
