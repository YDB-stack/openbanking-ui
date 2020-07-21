'use strict'

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports['default'] = ShowBalance

var _react = _interopRequireDefault(require('react'))

require('./InfoDisplay.css')

var _reactstrap = require('reactstrap')

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj }
}

function ShowBalance(props) {
    if (!props.balance) {
        console.log('no data')
        return null
    }

    var balance = props.balance //var transaction=props.transaction;

    return (
        /*#__PURE__*/

        /* <div className="infoContainer">
         <div className="formattedData">
             <pre>{JSON.stringify(data, null, 4)}</pre>
         </div>
     </div>*/
        _react['default'].createElement(
            _reactstrap.Alert,
            {
                color: 'success',
            },
            /*#__PURE__*/ _react['default'].createElement(
                'h2',
                null,
                'Currently your balance is \xA3',
                balance[0].Amount.Amount
            )
        )
    )
}
