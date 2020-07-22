import React, { useEffect } from 'react'
import axios from 'axios'
import './Accounts.css'
import './Apartment.css'

//accounts api list

class Apartment extends React.Component {
    constructor() {
        super()

        this.state = {
            value: 'none',
            data: null,
        }
    }

    handleClick = (args) => {
        var city = this.state.value

        axios
            .get(
                'http://api.zoopla.co.uk/api/v1/property_listings.js?area=' +
                    city +
                    '&api_key=p5ah8rsdm7h7de7tv6x8r6wu'
            )
            .then((response) => {
                this.setState({ data: response.data })
                console.log(response.data)
                console.log(response.status)
                console.log(response.statusText)
                console.log(response.headers)
                console.log(response.config)
            })
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <>
                <h1 align="center">Choose your city</h1>
                <div align="center">
                    <select
                        className="wide-select"
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    >
                        <option value="none">Select</option>
                        <option value="London">London</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                    </select>
                    <button
                        className="btn btn-primary"
                        onClick={this.handleClick.bind(this)}
                    >
                        Search
                    </button>
                </div>
                <div className="parent-box">
                    {this.state.data
                        ? this.state.data.listing.map((item) => {
                              return (
                                  <div className="box">
                                      <p align="center">
                                          <img src={item.agent_logo}></img>
                                          <br />
                                          <br />
                                          <strong>Address</strong>
                                          <br />
                                          {item.displayable_address}
                                          <br />
                                          <strong>Agent Name</strong>
                                          <br />
                                          {item.agent_name}
                                          <br />
                                          <br />
                                          <strong>Price</strong>
                                          <br />
                                          {item.price}
                                          <br />
                                          <br />
                                          <strong>Status</strong>
                                          <br />
                                          {item.listing_status}
                                          <br />
                                          <br />
                                      </p>
                                  </div>
                              )
                          })
                        : null}
                </div>
                <br />
                <br />
                <br />
                <br />
                <a href="/menu">
                    <button className="btn btn-primary">Back to Menu</button>
                </a>
            </>
        )
    }
}

/*
        axios.get('http://api.zoopla.co.uk/api/v1/property_listings.xml?area='+area+'&api_key=p5ah8rsdm7h7de7tv6x8r6wu')
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        );

    handleClick = (args) =>{
        var city = this.state.value;
        console.log(city);
    }

    render () {

        <>
            <div className="mainContainer">
                <h2 className="pageTitle">
                </h2>
                <label for="city">Choose a city   </label>
                            <select name={this.state.value} form="cityform">
                                <option value="London">London</option>
                                <option value="Edinburgh">Edinburgh</option>
                                <option value="Manchester">Manchester</option>
                                <option value="Liverpool">Liverpool</option><br />
                            </select>
                            <br /><br /><br />
                            <button
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                Search properties
                                </button>
            </div>
            <a href="/menu">
                <button className="btn btn-primary">Menu</button>
            </a>
        </>
    )
}
}*/

export default Apartment
