import React from 'react'
import './InfoDisplay.css'
import { useDispatch, useSelector } from 'react-redux'
import ListAccounts from './ListAccounts'
import ShowBalance from './ShowBalance'
import Showtransactions from './Showtransactions'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'

//import {Menu} from 'C:\\Users\\Mukund Ayodhya\\Documents\\GitHub\\openbanking-ui\\packages\\web-app\\src\\Menu';

//display formatted json data
export default function InfoDisplay({ data = {} }) {
    if (!data) {
        console.log('No data')
        return null
    }

    console.log(data)
    const dispatch = useDispatch()

    var accounts = data.Data.Account

    var balance = data.Data.Balance

    var transaction = data.Data.Transaction

    if (accounts) {
        console.log('Setting account')
        console.log(JSON.stringify(accounts))
        localStorage.setItem('accounts', JSON.stringify(accounts))
        console.log('Account setttt')
        return <ListAccounts accounts={accounts} />
    } else if (balance) {
        console.log(balance)
        console.log('Balance storing locally')
        localStorage.setItem('balance', JSON.stringify(balance))
        console.log(JSON.stringify(balance))
        return <ShowBalance balance={balance} />
    } else if (transaction) {
        localStorage.setItem('transaction', JSON.stringify(transaction))
        return <Showtransactions transaction={transaction} />
    }
}
