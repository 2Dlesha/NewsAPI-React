import React, {Component} from 'react';

export default class NothingFoundBlock extends Component{
    render(){
        const p = <p>There are no articles matching your request</p>
        return (
            <div className='no-match'>
                {p}
            </div>
        )
    }
}