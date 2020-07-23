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
import { Menu } from './Menu'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(7),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
}))
//accounts api list
const Accounts = () => {
    const classes = useStyles()
    console.log('11')
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)

    console.log('dispatch')
    const dispatch = useDispatch()

    useEffect(() => getAccountList(dispatch), [])

    return (
        <div className="mainContainer">
            <h2 className="pageTitle">
                Your account has been successfully added <br />
                <br />
                {data
                    ? data.Data.Account.map((item) => {
                          return (
                              <>
                                  <br />
                                  <strong>{item.Nickname}</strong>
                                  <br />
                              </>
                          )
                      })
                    : console.log('null from Account component')}
            </h2>
            <a href="/menu">
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    preventDefault
                    className={classes.submit}
                    //onClick={Card}
                >
                    Back to menu
                </Button>
            </a>

            <div className="apiContainer">
                <div className="btnContainer">
                    {/*
                    <button
                        className="buttonLinks"
                        onClick={() => {
                            console.log('Acc List')
                            getAccountList(dispatch)
                        }}
                    >
                        Get Account List
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountById(dispatch, accountId)}
                    >
                        Get Account By Id
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => {
                            console.log('Ba1ance ')
                            getAccountBalances(dispatch, accountId)
                        }}
                    >
                        Get Account Balances
                    </button>
                    {/*   <button
                        className="buttonLinks"
                        onClick={() =>
                            getAccountDirectDebits(dispatch, accountId)
                        }
                    >
                        Get Account Direct Debits
                    </button>
                    */}
                    {/*
                    <button
                        className="buttonLinks"
                        onClick={() =>
                            getAccountTransactions(dispatch, accountId)
                        }
                    >
                        Get Account Transactions
                    </button>
                    {/* <button
                        className="buttonLinks"
                        onClick={() => getAccountProducts(dispatch, accountId)}
                    >
                        Get Account Products
                    </button>
                    
                    <button
                        className="buttonLinks"
                        onClick={() =>
                            getAccountStandingOrders(dispatch, accountId)
                        }
                    >
                        Get Account Standing Orders
                    </button>
                    */}
                </div>
                <div className="displayInfo">
                    <InfoDisplay data={data} />
                    {console.log('DATA after InfoDisplay')}
                    {console.log(data)}
                </div>
            </div>
        </div>
    )
}

export default Accounts
