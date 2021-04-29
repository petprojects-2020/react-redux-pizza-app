import React from 'react';
import './form.css';
import Button from './../../button';

const Form = () => {
    return (
        <div className="text-center text-md-left">
            <div className="form__heading">
                <div>Send us a Message</div>
                <p>
                    Aenean massa diam, viverra vitae luctus sed, gravida eget est. 
                    Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis.
                </p>
            </div>
                <form className="order__fields col-12 
                                 border rounded p-4">
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="name">Name</label>
                            <input  type="text" 
                                    className="form-control"
                                    name="name" 
                                    id="name"
                            />      
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="fullname">Fullname</label>
                            <input  type="text" 
                                    className="form-control"
                                    name="fullname" 
                                    id="fullname"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="email">Email</label>
                            <input  type="email" 
                                    className="form-control"
                                    name="email" 
                                    id="email"
                            />
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="phone">Phone</label>
                            <input  type="text" 
                                    className="form-control"
                                    name="phone"  
                                    id="phone"
                            />
                        </div>
                    </div>
                    <Button onClick={(e)=> e.preventDefault()} type="submit">
                        Send message
                    </Button>
                </form>
        </div>
    );
}

export default Form;