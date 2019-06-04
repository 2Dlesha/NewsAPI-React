import React from "react";
import { Component } from "react";
import '../main.css';

export default class Article extends Component {

    constructor(params)
    {
        super();
        this.article = params.article;
        if(this.article.urlToImage == null){
            this.article.urlToImage ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/256px-No_image_available.svg.png";
        }
    }

    render()    
    {
        return(
            <div className="article-div">
                <img src={this.article.urlToImage} alt="naruto"/>
                <h1>{this.article.title}</h1>
                
                <p>{this.article.description}</p>
                <a href={this.article.url}>more</a>
                <h2>{this.article.author}</h2>
                <h1>{this.article.source.name }</h1>
            </div>
        )        
    }
}