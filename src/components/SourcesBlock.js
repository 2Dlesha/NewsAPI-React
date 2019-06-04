import React from 'react';
import {Component} from 'react';
import Source from './Source';
import '../main.css';

export default class SourcesBlock extends Component{
    constructor(params){
        super();
        this.sources = params.sources;    
        this.reload = params.reload;
        this.state = {currSource : '', currSourceName : 'All News'}      
    }

    render(){
        const sourceList = this.sources.map((x) => <Source source = {x} method={this.changeSource} />);
        //let currSource =  (this.state.currSourceName == '') ? "All News" : this.state.currSourceName;
        return (
            <div>
                <div  className='current-source'>{this.state.currSourceName}</div>
                <div className='select-source'  id="sources">
                    {sourceList}
                </div>
            </div>
        )
    }

    changeSource = async  (source) =>{
        await this.setState({currSource : source.id, currSourceName : source.name });
        this.reload();
    }


}