import React from 'react';
import { Component } from "react"

export default class SearchBlock extends Component{
    constructor(props){
        super();
        this.buttonName = props.value;
        this.onClick = props.onClick;
        this.state =
        {
            filter : ''
        }
    }
    
    render(){
        return (
            <div className="find-area">
                    <input type="submit" value="Filter" onClick={this.SetFilter}  id="search-button"/>
                    <input ref='q' type="text" id="search-line"/>
            </div>
        )
    }

    SetFilter = async () =>
    {
        await this.setState(
            {filter : this.refs.q.value}
        )
        this.onClick();
    }

}