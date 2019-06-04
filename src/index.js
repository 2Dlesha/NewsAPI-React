import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { LoadNewsSources } from './NewsFunctions';
import { API_KEY } from './Constants';
import './main.css';

async function LoadPage(){
  let allsources = await LoadNewsSources(API_KEY);
  ReactDOM.render(<App sources={allsources}/>, document.getElementById('root'));
}

LoadPage();