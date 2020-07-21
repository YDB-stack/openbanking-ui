'use strict'

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports['default'] = ListAccounts

var _react = _interopRequireDefault(require('react'))

require('./InfoDisplay.css')

var _reactRedux = require('react-redux')

var _accountService = require('@openbanking/ui-data/lib/services/account-service')

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
}

function ListAccounts(props) {
    if (!props.accounts) {
        return null
    }

    var dispatch = (0, _reactRedux.useDispatch)()
    var accounts = props.accounts
    return (
        /*#__PURE__*/

        /* <div className="infoContainer">
         <div className="formattedData">
             <pre>{JSON.stringify(data, null, 4)}</pre>
         </div>
     </div>*/
        _react['default'].createElement(
            'div',
            null,
            /*#__PURE__*/ _react['default'].createElement(
                'div',
                {
                    class: 'ui three stackable cards',
                },
                accounts.map(function (account, index) {
                    return /*#__PURE__*/ _react['default'].createElement(
                        'div',
                        {
                            class: 'ui blue card',
                            key: index,
                        },
                        /*#__PURE__*/ _react['default'].createElement(
                            'div',
                            {
                                class: 'ui content',
                            },
                            /*#__PURE__*/ _react['default'].createElement(
                                'div',
                                {
                                    class: 'ui blue header',
                                },
                                account.Nickname
                            )
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                            'h2',
                            {
                                class: 'ui purple sub header',
                            },
                            account.AccountType,
                            ' ',
                            account.AccountSubType
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                            'div',
                            {
                                class: 'event',
                            },
                            /*#__PURE__*/ _react['default'].createElement(
                                'div',
                                {
                                    class: 'summary',
                                },
                                /*#__PURE__*/ _react['default'].createElement(
                                    'h5',
                                    {
                                        class: 'ui violet header',
                                    },
                                    'Currency: ',
                                    account.Currency
                                )
                            )
                        ),
                        /*#__PURE__*/ _react['default'].createElement(
                            'div',
                            {
                                class: 'extra content',
                            },
                            /*#__PURE__*/ _react['default'].createElement(
                                'button',
                                {
                                    class: 'ui green button',
                                    onClick: function onClick() {
                                        return (0,
                                        _accountService.getAccountBalances)(
                                            dispatch,
                                            account.AccountId
                                        )
                                    },
                                },
                                'Know balance'
                            ),
                            /*#__PURE__*/ _react['default'].createElement(
                                'br',
                                null
                            ),
                            /*#__PURE__*/ _react['default'].createElement(
                                'br',
                                null
                            ),
                            /*#__PURE__*/ _react['default'].createElement(
                                'br',
                                null
                            ),
                            /*#__PURE__*/ _react['default'].createElement(
                                'button',
                                {
                                    class: 'ui blue button',
                                    onClick: function onClick() {
                                        return (0,
                                        _accountService.getAccountTransactions)(
                                            dispatch,
                                            account.AccountId
                                        )
                                    },
                                },
                                'Get last 3 Transactions '
                            )
                        )
                    )
                })
            ),
            /*#__PURE__*/ _react['default'].createElement('br', null),
            /*#__PURE__*/ _react['default'].createElement('br', null),
            /*#__PURE__*/ _react['default'].createElement('br', null),
            /*#__PURE__*/ _react['default'].createElement(
                'button',
                {
                    class: 'ui violet button',
                },
                'Get your Credit Score by clicking'
            )
        )
    )
}
