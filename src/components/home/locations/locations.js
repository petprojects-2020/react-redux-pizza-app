import React, { Component } from 'react';
import './locations.css';
import tomatoImage from './tomato_img.jpg';
import mushroomImage from './mushroom_img.jpg';

class Locations extends Component {

    state = {
        activeButtonId: 1,
        buttonsList: [
            {id: 1, title: "Dine-in Hours", className: "btn mb-2", isActive: false},
            {id: 2, title: "Delivery Hours", className: "btn mb-2", isActive: false},
            {id: 3, title: "Pickup Hours", className: "btn mb-2", isActive: false}
        ],
        timeFramesList:
        [
            {monday: "10.00-18.00", tuesday: "11.00-19.00", sunday: "12.00-20.00"},
            {monday: "11.00-19.00", tuesday: "12.00-20.00", sunday: "13.00-21.00"},
            {monday: "12.00-20.00", tuesday: "13.00-21.00", sunday: "14.00-22.00"}
        ]
    };

    handleClick = (event) => {
        let clickedButtonId = event.target.id;
        this.setState({ activeButtonId: clickedButtonId });
        let a = +clickedButtonId - 1;
        let b,c;
        if(a === 0) { b = 1; c = 2; }
        else if(a === 1) { b = 0; c = 2; }
        else if(a === 2) { b = 0; c = 1; }
        let updatedBtnLists = [...this.state.buttonsList];
        let updatedBtn = {...updatedBtnLists[a]};
        let updatedFirstBtn = {...updatedBtnLists[b]};
        let updatedSecondBtn = {...updatedBtnLists[c]};
        if(updatedBtn.isActive){
            updatedBtn.isActive = false;
        } else {
            updatedBtn.isActive = true;
            updatedFirstBtn.isActive = false;
            updatedSecondBtn.isActive = false;
        }
        updatedBtnLists[a] = updatedBtn;
        updatedBtnLists[b] = updatedFirstBtn;
        updatedBtnLists[c] = updatedSecondBtn;
        this.setState({buttonsList: updatedBtnLists});
    }
    render() {
        let timeFramesListId = this.state.activeButtonId;
        return (
            <div className="row my-3 align-items-center">
                <div className="col-12 col-md-2 text-center">
                    <img src={ tomatoImage } alt="" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8 px-4 py-5 text-center text-white locations__container shadow rounded">
                    <h3 className="locations__heading">9 CHICAGOLAND LOCATIONS</h3>
                    <p className="locations__subheading mt-3">We have dine-in restaurants and carryout and delivery only locations, so before you settle on a location,
                    make sure they accommodate what you’re looking for!</p>
                    <div className="hours mt-4">
                        <div className="d-flex flex-column flex-sm-row justify-content-around"> 
                            {this.state.buttonsList.map((button) => {
                                let { id, title, className, isActive } = button;
                                if(id === this.state.activeButtonId || isActive) {
                                    className = "btn btn-warning mb-2 active__font-color";
                                } 
                                return <button onClick = {(e) => this.handleClick(e)}
                                        key={ id } id={ id } className={className}>
                                        { title }</button>
                            })}
                        </div>
                        <div className="pt-4">
                            <div>Monday: { this.state.timeFramesList[timeFramesListId-1].monday }</div>
                            <div>Tuesday – Saturday: { this.state.timeFramesList[timeFramesListId-1].tuesday }</div>
                            <div>Sunday: { this.state.timeFramesList[timeFramesListId-1].sunday }</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 text-center">
                    <img src={ mushroomImage } alt="" className="img-fluid rounded" />
                </div>
            </div>
        );
    }
}

export default Locations;