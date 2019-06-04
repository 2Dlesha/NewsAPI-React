import React from "react";
import { Component } from "react";
import SourcesBlock from './SourcesBlock';
import ArticlesBlock from "./ArticlesBlock";
import {PAGE_SIZE, NEWS_LIMIT} from '../Constants';
import ShowMoreButton from './ShowMoreButton';
import SearchBlock from './SearchBlock';


export default class App extends Component{

    constructor(props){
        super();
        this.sources = props.sources;
        this.articles = [];  
    }

    render(){
        return (
            <div id='main-block'>
                <div>
                    <div>
                        <a className='logo' href ='../../public/index.html'>Ilya's News</a>
                    </div>
                    <div>
                        <SearchBlock ref="searchBlock" onClick={this.ReloadPage} />
                        <SourcesBlock ref="sourcesBlock" sources={this.sources}  reload={this.ReloadPage} />
                    </div>
                </div>
                <div className='main-content'>
                    <ArticlesBlock ref="articlesBlock" articles={this.articles} sourcesBlock={this.refs.sourcesBlock}  />
                    <ShowMoreButton ref='showMoreButton' onClick={this.onClick} value='Show more'/>
                </div>
            </div>
        );   
    }

    UpdatePage =  async function(articlesBlock, q, source){
        await articlesBlock.setState({
            newsBlocks: [],
            currentPage: 1
        });
        
        const loadedNews = await articlesBlock.LoadNews(q, source);
        articlesBlock.AddArticles(loadedNews);
        this.refs.showMoreButton.Refresh(loadedNews.length, PAGE_SIZE, articlesBlock.state.newsBlocks.length, NEWS_LIMIT);
    };

    ReloadPage = () => {
        console.log(this.refs);
        //const q = this.refs.searchBlock.refs.q.value;
        const q = this.refs.searchBlock.state.filter;
        const source = this.refs.sourcesBlock.state.currSource;
        const articlesBlock = this.refs.articlesBlock;
        
        this.UpdatePage(articlesBlock, q, source);
    }

    onClick = async () => {
        const articlesBlock = this.refs.articlesBlock;
        //const q = this.refs.searchBlock.refs.q.value;
        const q = this.refs.searchBlock.state.filter;
        const source = this.refs.sourcesBlock.state.currSource;

        const newArticles = await articlesBlock.LoadNews(q, source);
        articlesBlock.AddArticles(newArticles);
        this.refs.showMoreButton.Refresh(newArticles.length, PAGE_SIZE, articlesBlock.state.newsBlocks.length, NEWS_LIMIT);        
    };


    
}
