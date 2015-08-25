"use strict";

var React = require("react");
var Router = require("react-router");

var Link = Router.Link;

var Footer = React.createClass({
    propTypes: {
        onNavigate: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            <div className="content">
                <h4 className="primary">Device Survey</h4>
                <p className="secondary">
                    <span>&copy; 2015 Faraway Software Studio </span>
                    <span> &bull; </span>
                    <span><Link onClick={this.props.onNavigate} to="about">About</Link></span>
                </p>
            </div>
        );
    }
});

module.exports = Footer;
