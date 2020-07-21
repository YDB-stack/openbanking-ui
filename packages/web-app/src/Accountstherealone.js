import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

//accounts api list

const Accounts = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)

    useEffect(() => {
        getAccountList(dispatch)
    }, [])

    const dispatch = useDispatch()

    return (
        <>
            <div className="mainContainer">
                <h2 className="pageTitle">
                    {data !== null
                        ? data.Data.Account.map((item) => {
                              if (item !== null)
                                  return (
                                      <>
                                          <br /> {item.Nickname.concat('\n')}
                                      </>
                                  )
                          })
                        : null}
                </h2>
            </div>
            <a href="/menu">
                <button className="btn btn-primary">Menu</button>
            </a>
        </>
    )
}

export default Accounts
