
/**
 * A Higher order component to display different components for mobile and desktop.
 * Sometimes, we have to create one component for desktop and another for mobile.
 * This cannot be solved by CSS media queries alone, as internal React rendering
 * of components is not controlled by media queries.
 * This HOC uses the viewport width and useragent to detect mobile screens.
 * It can easily be extended to support tablet detection.
 * Also supports throttling to improve performance.
 *
 * @param {Class} The wrapped component
 * @returns {Class} Returns the new class with additional data on props.
 * @example
 *
 * var withDimensions = require('Dimensions');
 * module.exports = withDimensions(ReactIntl.injectIntl(AccountResults));
 * render() { this.props.isMobile() ? (Mobile component) : (Desktop component) }
 *
 * @author: Kenneth John Crasta (@kcrasta)
 */

var React = require("react");

const withDimensions = (WrappedComponent) => {

     class Dimensions extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                width: undefined,
                height: undefined
            };

            this._updateDimensions = this._updateDimensions.bind(this);
            this._isMobile = this._isMobile.bind(this);
        }

        _isMobile() {
            return this.state.width <= Dimensions.MAX_MOBILE_WIDTH;
        }

        _updateDimensions() {
            var documentElement = document.documentElement,
                body = document.getElementsByTagName('body')[0],
                width = window.innerWidth || documentElement.clientWidth || body.clientWidth,
                height = window.innerHeight || documentElement.clientHeight || body.clientHeight;

            this.setState({
                    width: width,
                    height: height
                }
            );
        }

        componentDidMount() {
            this._updateDimensions();
            window.addEventListener("resize", this._updateDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this._updateDimensions);
        }

        render() {
            var dimensions = {width: this.state.width, height: this.state.height};
            return <WrappedComponent isMobile={this._isMobile} screenSize={dimensions} {...this.props} />;
        }
    }

    Dimensions.MAX_MOBILE_WIDTH = 767; // in px
    Dimensions.THROTTLE_TIME_FRAME = 100; // in ms

    return Dimensions;

};

export default withDimensions;