import React from 'react';
import { Component } from "react"

export default  class ShowMoreButton extends Component{
    constructor(props){
        super();
        this.buttonName = props.value;
        this.onClick = props.onClick;
        this.state={
            isVisible: true
        }
    }
    
    render(){
        const button = this.state.isVisible && <button onClick={this.onClick} name="find-news" className="btn btn-success button-show-more" id="find-news">{this.buttonName}</button>;
        return (
            <div>
                {button}
            </div>
        )
    }

    Refresh = (gotNewsCount, newsPerRequest, newsCount, maxNewsCount) => {
        if(gotNewsCount < newsPerRequest || newsCount >= maxNewsCount){
            this.MakeInvisible();
        }
        else    
            this.MakeVisible();
    }
    
    MakeInvisible = () => {
        this.setState({
            isVisible: false
        })
    }

    MakeVisible = () => {
        this.setState({
            isVisible: true
        })
    }

}


