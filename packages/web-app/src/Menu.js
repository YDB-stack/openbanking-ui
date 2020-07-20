import React from 'react'
import Dashboard from './Dashboard'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'

import { useDispatch, useSelector } from 'react-redux'

import ReactDOM from 'react-router-dom'

import './Menu.css'

const cardContainer = document.querySelector('.react-card')

// React component for form inputs
class CardInput extends React.Component {
    render() {
        return (
            <fieldset>
                <input
                    name={this.props.name}
                    id={this.props.id}
                    type={this.props.type || 'text'}
                    placeholder={this.props.placeholder}
                    required
                />
            </fieldset>
        )
    }
}

// React component for textarea
class CardTextarea extends React.Component {
    render() {
        return (
            <fieldset>
                <textarea
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    required
                ></textarea>
            </fieldset>
        )
    }
}

// React component for form button
export class CardBtn extends React.Component {
    render() {
        return (
            <fieldset>
                <button
                    className={this.props.className}
                    type={this.props.type}
                    value={this.props.value}
                >
                    {this.props.value}
                </button>
            </fieldset>
        )
    }
}

// React component for social profile links
class CardProfileLinks extends React.Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook']

        const linksList = profileLinks.map((link, index) => (
            <li key={index}>
                <a href="#">
                    <i className={'fa fa-' + link}></i>
                </a>
            </li>
        ))

        return (
            <div className="card-social-links">
                <ul className="social-links">{linksList}</ul>
            </div>
        )
    }
}

// React component for the front side of the card
class CardFront extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6"></div>

                        <div className="col-xs-6 side-front-content">
                            <h1 align="center">
                                {' '}
                                &emsp; &emsp; &emsp; &emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;Your Bank accounts
                            </h1>

                            <p>
                                View and add your bank accounts in one place !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardFront2 extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6"></div>

                        <div className="col-xs-6 side-front-content">
                            <h1>Find Rentals/Buy a home</h1>

                            <p>
                                Check out Apartment listings at your preferred
                                location at affordable prices!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardFront3 extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6"></div>

                        <div className="col-xs-6 side-front-content">
                            <h1>Pay your rent</h1>

                            <p>Pay your rent with the click of a button!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardFront4 extends React.Component {
    render() {
        return (
            <div className="card-side side-front">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6"></div>

                        <div className="col-xs-6 side-front-content">
                            <h1>Credit scores and offers</h1>

                            <p>
                                Check your credit score and avail exciting
                                offers including housing loans!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// React component for the back side of the card
/*class CardBack extends React.Component {
    render() {

        var data = useSelector((state) => state.app.data);
        const dispatch = useDispatch()
        getAccountList(dispatch);
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                   <Dashboard />
                <h1> {data} </h1>
            </div>
            </div>
        )
    }
}*/

const CardBack = (props) => {
    var data = useSelector((state) => state.app.data)
    const dispatch = useDispatch()
    getAccountList(dispatch)
    return (
        <div className="card-side side-back">
            <div className="container-fluid">
                <Dashboard />
                <h1> {data} </h1>
            </div>
        </div>
    )
}

class CardBack2 extends React.Component {
    render() {
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                    <h1>Search for your Dream Home</h1>

                    <form formAction="" className="card-form">
                        <div className="row">
                            <CardBtn
                                className="btn btn-primary"
                                value="Search"
                            />
                        </div>
                    </form>

                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}

class CardBack3 extends React.Component {
    render() {
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                    <h1>Let's get in touch!</h1>

                    <form formAction="" className="card-form">
                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput
                                    name="contactFirstName"
                                    id="contactFirstName"
                                    type="text"
                                    placeholder="Your first name"
                                />
                            </div>

                            <div className="col-xs-6">
                                <CardInput
                                    name="contactLastName"
                                    id="contactLastName"
                                    type="text"
                                    placeholder="Your last name"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput
                                    name="contactEmail"
                                    id="contactEmail"
                                    type="email"
                                    placeholder="Your email address"
                                />
                            </div>

                            <div className="col-xs-6">
                                <CardInput
                                    name="contactSubject"
                                    id="contactSubject"
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>
                        </div>

                        <CardTextarea
                            name="contactMessage"
                            id="contactMessage"
                            placeholder="Your message"
                        />

                        <CardBtn
                            className="btn btn-primary"
                            type="submit"
                            value="Send message"
                        />
                    </form>

                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}

class CardBack4 extends React.Component {
    render() {
        return (
            <div className="card-side side-back">
                <div className="container-fluid">
                    <h1>Let's get in touch!</h1>

                    <form formAction="" className="card-form">
                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput
                                    name="contactFirstName"
                                    id="contactFirstName"
                                    type="text"
                                    placeholder="Your first name"
                                />
                            </div>

                            <div className="col-xs-6">
                                <CardInput
                                    name="contactLastName"
                                    id="contactLastName"
                                    type="text"
                                    placeholder="Your last name"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput
                                    name="contactEmail"
                                    id="contactEmail"
                                    type="email"
                                    placeholder="Your email address"
                                />
                            </div>

                            <div className="col-xs-6">
                                <CardInput
                                    name="contactSubject"
                                    id="contactSubject"
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>
                        </div>

                        <CardTextarea
                            name="contactMessage"
                            id="contactMessage"
                            placeholder="Your message"
                        />

                        <CardBtn
                            className="btn btn-primary"
                            type="submit"
                            value="Send message"
                        />
                    </form>

                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}

// React component for the card (main component)
class Card extends React.Component {
    render() {
        return (
            <>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack />

                            <CardFront />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack2 />

                            <CardFront2 />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack3 />

                            <CardFront3 />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card-container">
                        <div className="card-body">
                            <CardBack4 />

                            <CardFront4 />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// Render Card component
//ReactDOM.render(<Card />, cardContainer)

export { Card }
