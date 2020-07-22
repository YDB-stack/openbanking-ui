import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '@openbanking/ui-common/lib/Header'
import ErrorBoundary from '@openbanking/ui-common/lib/ErrorBoundary'
import Loading from '@openbanking/ui-common/lib/Loading'
import Error from '@openbanking/ui-common/lib/Error'
import NotFound from '@openbanking/ui-common/lib/NotFound'
import Accounts from './Accounts'
import Apartment from './Apartment'
//import Accounts from './Accounts'
//import Accounts from './Accounts1'
import { Card as CD } from './AccountsCards'
import Dashboard from './Dashboard'
import Loader from './Loader'
import Redirecting from './Redirecting'
import PrivateRoute from './PrivateRoute'
import Payments from './Payments'
import Login from './Login'
import { Menu } from './Menu'
import { RentHistory } from './RentHistory'
import './App.css'

import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'
import Apartments from './Apartment'

// views

const App = () => {
    const loading = useSelector((state) => state.common.loading)
    const error = useSelector((state) => state.common.error)
    /*   const data = useSelector((state) => state.app.data)

    useEffect(() => {
        getAccountList(dispatch)
    }, [])
    const dispatch = useDispatch()
    */
    return (
        <div className="app">
            {loading && <Loading />}
            <Header />
            <ErrorBoundary>
                {error && <Error />}
                <div className="section-content">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/menu" component={Menu} />
                            <Route
                                exact
                                path="/RentHistory"
                                component={RentHistory}
                            />
                            <Route
                                exact
                                path="/payments"
                                component={Payments}
                            />
                            <Route exact path="/loading" component={Loader} />
                            <Route
                                exact
                                path="/apartments"
                                component={Apartment}
                            />

                            <Route
                                exact
                                path="/redirecting"
                                render={() => <Redirecting />}
                            />
                            <PrivateRoute
                                exact
                                path="/aisp"
                                render={() => <Accounts />}
                            />
                            <PrivateRoute
                                exact
                                path="/pisp"
                                render={() => <Payments />}
                            />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default App
