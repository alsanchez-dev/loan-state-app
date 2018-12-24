import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class AddClient extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newClient = this.state;
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


        render(){
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/" className="btn-link">
                            <i className="fas fa-arrow-circle-left" /> Back To Dashboard
                            </Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">Add Client</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        minLength="2"
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }


//     render() {
//         return (
//
//             <div>
//                 <div className="row">
//                     <div className="col-md-6">
//                         <Link to="/" className="btn btn-link">
//                             <i className="fas fa-arrow-circle-left" /> Back To Dashboard
//                         </Link>
//                     </div>
//                 </div>
//
//                 <div className="card">
//                     <div className="card-header">Add Client</div>
//                     <div className="card-body">
//                         <form onSubmit={this.onSubmit} >
//                             <div className="form-group">
//                                 <label htmlFor="firstName">First Name</label>
//                                 <imput
//                                     type="text"
//                                     className="form-control"
//                                     name="firstName"
//                                     minLength="2"
//                                     required
//                                     onChange={this.onChange}
//                                     value={this.state.firstName}
//                                 />
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="lastName">Last Name</label>
//                                 <imput
//                                     type="text"
//                                     className="form-control"
//                                     name="lastName"
//                                     minLength="2"
//                                     required
//                                     onChange={this.onChange}
//                                     value={this.state.lastName}
//                                 />
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="email">Email</label>
//                                 <imput
//                                     type="email"
//                                     className="form-control"
//                                     name="email"
//                                     onChange={this.onChange}
//                                     value={this.state.email}
//                                 />
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="phone">Phone</label>
//                                 <imput
//                                     type="text"
//                                     className="form-control"
//                                     name="phone"
//                                     minLength="10"
//                                     required
//                                     onChange={this.onChange}
//                                     value={this.state.phone}
//                                 />
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="balance">Balance</label>
//                                 <imput
//                                     type="text"
//                                     className="form-control"
//                                     name="balance"
//                                     onChange={this.onChange}
//                                     value={this.state.balance}
//                                 />
//                             </div>
//
//                             <input
//                                 type="submit"
//                                 value="Submit"
//                                 className="btn btn-primary btn-block"
//                             />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

}

export default firestoreConnect()(AddClient);
