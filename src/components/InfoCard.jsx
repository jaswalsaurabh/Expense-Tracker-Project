import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{textAlign: 'center', padding: '0 10%'}} >
            Try saying: <br/>
            Add {isIncome ? 'Income ' : 'Expense '}
            in Category {isIncome ? 'Business ' : 'House '}   
            of {isIncome ? '₹100 ' : '₹50 '}
            for {isIncome ? 'Monday ' : 'Tuesday '}
        </div>
    )
}

export default InfoCard
