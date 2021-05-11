import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            
            <div>
            <button 
            className="button" 
            onClick={this.props.smallTime}>DJ Small 
            </button>
            <button 
            className="button" 
            onClick={this.props.partyDj}>Party DJ
            </button>
            <button 
            className="button" 
            onClick={this.props.leftBlue}>Left Blue
            </button>
            <button 
            className="button" 
            onClick={this.props.rightBlue}>Right Blue
            </button>
            <button 
            className="button" 
            onClick={this.props.bigDjOne}>Big Dj Juan
            </button>
            <button 
            className="button" 
            onClick={this.props.bigDjTwo}>Big Dj Two
            </button>
            <button 
            className="button" 
            onClick={this.props.bigDjThree}>Big Dj Three
            </button>
            <button className="button"  
            onClick={this.props.bigDjFour}>Big Dj Four
            </button>
            
            </div>
    
         
        )
    }
}


export default Buttons
