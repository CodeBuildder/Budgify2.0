import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

numeral.register('locale', 'inr', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '₹'
    }
});
numeral.locale('inr');


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
        <p>
            
            {numeral(amount).format('$0,0.00')} 

            -

            {moment(createdAt).format('ddd, Do MMM YYYY') }
        </p>
    </div>
)



export default ExpenseListItem