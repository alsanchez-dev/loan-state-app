import React, { Component } from 'react'

class Clients extends Component {
    render() {
        const clients = [{
            id: '4242523523',
            firstName: 'Kevin',
            lastName: 'Johnson',
            email: 'kevin@gmail.com',
            phone: '555-555-5555',
            balance: '30'
        }]
        return (
            <div>
                <h1>Clients</h1>
            </div>
        )
    }
}

export default Clients;
