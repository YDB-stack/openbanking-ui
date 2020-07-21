'use strict'

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports['default'] = Showtransactions

var _react = _interopRequireDefault(require('react'))

var _reactRedux = require('react-redux')

var _reactstrap = require('reactstrap')

require('./InfoDisplay.css')

var _accountService = require('@openbanking/ui-data/lib/services/account-service')

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
}

function Showtransactions(props) {
    if (!props.transaction) {
        console.log('no data')
        return null
    }

    var dispatch = (0, _reactRedux.useDispatch)() //var balance=props.balance;

    var transactions = props.transaction
    if (transactions.length > 3) transactions = transactions.slice(0, 3)
    console.log('Inside show transactions:', transactions)
    return /*#__PURE__*/ _react['default'].createElement(
        'div',
        null,
        /*#__PURE__*/ _react['default'].createElement(
            'div',
            {
                class: 'ui three stackable cards',
            },
            transactions.map(function (transaction, index) {
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
                            transaction.AccountId
                        )
                    ),
                    /*#__PURE__*/ _react['default'].createElement(
                        'h2',
                        {
                            class: 'ui purple sub header',
                        },
                        'Transaction Amount: \xA3',
                        transaction.Amount.Amount
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
                                'Transaction Info: ',
                                transaction.TransactionInformation
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
                                    return (0, _accountService.getAccountList)(
                                        dispatch
                                    )
                                },
                            },
                            'Return to Accounts'
                        )
                    )
                )
            })
        )
    )
}
