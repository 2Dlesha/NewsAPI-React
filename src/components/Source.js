import React from 'react';
import {Component} from 'react';
import '../main.css';

export default class Source extends Component{

    constructor(params)
    {
        super();
        this.source = params.source;
        this.changeSource = params.method;
    }

    render()
    {
        return <div className="source-div" onClick={this.onClick}>{this.source.name}</div>
    }

    onClick = () => {
        this.changeSource(this.source);
    }
}