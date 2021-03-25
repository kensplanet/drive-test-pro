import React from 'react'
import withDimensions from '../Dimensions';
import './Dock.css';

const Dock = ({isMobile}) => {
    return (
        <div id="dock-container">
            <div id="dock">
                <ul>
                    <li style={{paddingRight: '5px'}}><span>Phone</span><a href="tel:6477391046"><img
                        src="/phone.png"/></a></li>
                   <li><span>Whatsapp</span><a target="_blank" href="https://web.whatsapp.com/send?phone=16477391046"><img
                        src="/whatsapp.png"/></a></li>
                    {/*<li><span>Instagram</span><a target="_blank" href="https://www.instagram.com/"><img
                        src="/instagram.png"/></a></li>
                    <li><span>Facebook</span><a target="_blank" href="https://www.facebook.com/"><img
                        src="/facebook.png"/></a></li>*/}
                    <li><span>Email</span><a target="_blank" href="https://www.facebook.com/"><img
                        src="/email.png"/></a></li>
                </ul>
                <div className="base"></div>
            </div>
        </div>

    )
};

export default withDimensions(Dock);