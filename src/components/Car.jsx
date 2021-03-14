import React from 'react';
import './Car.css';
import Logo from "./Logo";

const Car = () => {
    return (

        <div className={"hero"}>
            <div className="highway">></div>
            <div className="car">
                <div style={{ width: '40vh'}}>
                    <Logo />
                </div>
                <img src="car.png"/>
            </div>
            <div className="wheel">>
                <img src="wheel.png" className="back-wheel"/>
                <img src="wheel.png" className="front-wheel"/>
            </div>
        </div>
    )
};

export default Car;