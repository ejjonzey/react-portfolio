import React, { Component } from 'react';
import styled from 'styled-components';
import ReactRevealText from 'react-reveal-text';




class Profile extends Component {
    constructor() {
        super();
        this.state = { show: false };
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 2000);
      }
    
      render() {
        const bgStyles = {
          background: 'linear-gradient(135deg, #66CCFF, #000000)',
          padding: '36px',
        };
        const textStyles = {
          color: 'white',
          fontSize: '24px',
          lineHeight: '36px',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          letterSpacing: '1em',
          paddingLeft: '1em', // to compensate for letter spacing
        };
        const bodyStyles = {
            display: "flex",
        };
        return (
            <div>
          <div style={bgStyles}>
            <div style={textStyles}>
            <ReactRevealText show={this.state.show} text="Eric Jonelunas" />
            <ReactRevealText show={this.state.show} text="Web Developer" />
            <ReactRevealText show={this.state.show} text="Disc Golfer" />          
        </div>
      </div>
      <div style={bodyStyles}>

      </div>
      </div>
        );
      }
    }
    export default Profile;