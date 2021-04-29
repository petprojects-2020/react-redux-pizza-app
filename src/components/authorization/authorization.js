import React, { Component } from 'react';
import './authorization.css';
import { Redirect, Link } from 'react-router-dom';
import Button from './../button';

class Authorization extends Component {
    
    state = {
        defaultEmail: "testemail@gmail.com",
        defaultPassword: "123456",
        userEmail: null,
        userPassword: null,
        isAuth: false 
    }

    handleEmailInput = (e) => {
        let userEmail = e.target.value;
        this.setState({ userEmail })
    }

    handlePasswordInput = (e) => {
        let userPassword = e.target.value;
        this.setState({ userPassword })
    }

    handleLoginBtn = () => {
        const { defaultEmail, userEmail, defaultPassword, userPassword } = this.state;
        if(defaultEmail === userEmail && defaultPassword === userPassword) {
            this.setState({ isAuth: true })
        }
    }

    render() {
        return (
            <div>
                <div className="text-center my-4">
                    <Link to="/" className="text-dark">
                        <span>HOME</span>
                    </Link>
                    <span className="mx-1">/</span>
                    <span>LOGIN PAGE</span>
                    <h2 className="orderonline__heading mt-1">LOGIN HERE</h2>
                </div>
                <div className="row p-1 p-md-4 justify-content-center align-items-center">
                    <form onSubmit={this.handleLoginBtn} 
                        className="col-12 col-sm-10 col-md-8 col-lg-5 border 
                                    border-secondary rounded p-4">
                        <div className="form-row">
                            <div className="form-group col-12">
                                <label htmlFor="email">EMAIL</label>
                                <input  type="email"
                                        placeholder="testemail@gmail.com" 
                                        className="form-control"
                                        name="email" 
                                        id="email"
                                        onChange={(e) => this.handleEmailInput(e)}
                                />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="password">PASSWORD</label>
                                <input  type="text" 
                                        className="form-control"
                                        placeholder="123456" 
                                        name="password"  
                                        id="password"
                                        onChange={(e) => this.handlePasswordInput(e)}
                                />
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            {this.state.isAuth ? <Redirect to="/clientsorders"/>
                                            : <Button type="submit">
                                                    LOG IN
                                                </Button>}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Authorization;