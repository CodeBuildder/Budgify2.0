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
    <Link className="listItem" to={`/edit/${id}`}>
        <div>
            <h3 className="lisItem-title">{description}</h3>
                <span className="listItem-sub-title">{moment(createdAt).format('ddd, Do MMM YYYY')}</span>
        </div>
        <h3 className="listItem-data">{numeral(amount).format('$0,0.00')}</h3>
    </Link>
)

export default ExpenseListItem