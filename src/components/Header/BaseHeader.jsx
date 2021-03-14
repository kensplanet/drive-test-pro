import React from 'react'
import withDimensions from '../Dimensions';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';


const Header = ({ isMobile }) => {

    return (
        isMobile() ? <MobileHeader/> : <DesktopHeader/>

    )
};

Header.propTypes = {

};

Header.defaultProps = {

};

export default withDimensions(Header);