import React from 'react';
import {Component} from 'react';
import Article from './Article';
import { GetNews} from '../NewsFunctions';
import '../main.css';
import NothingFoundBlock from './NothingFound';
import { PAGE_SIZE } from '../Constants';

export default class ArticlesBlock extends Component{

    constructor(params){
        super();
        this.state = {
            newsBlocks: [],
            currentPage: 1,
            pageSize: PAGE_SIZE
        }
    }
    
    async componentDidMount(){
        const newArticles = await this.LoadNews('', '');
        this.AddArticles(newArticles);  
    }
    
    render(){
        if (this.state.newsBlocks.length === 0 )
        {
            return( <div id='articles' className='container articles-div' ref={this.ref}>
                        <NothingFoundBlock/>
                    </div>)
        }
        else
            return(
                <div id='articles' className='container articles-div' ref={this.ref}>
                    {this.state.newsBlocks}
                </div>
            )
    }

    LoadNews = async (q, source) => {
        const newArticles = await GetNews(this.state.currentPage++, this.state.pageSize, q, source);
        console.log(" LoadNewsRequest");
        console.log(newArticles);
        return newArticles;
    }

    AddArticles = (newArticles) => {
        let articles = newArticles.map((x) => {
            return <Article article={x}/>;
        });
        this.setState({newsBlocks : this.state.newsBlocks.concat(articles)});
    }

}