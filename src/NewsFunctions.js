import {API_KEY} from './Constants';

export async function LoadNewsSources(apiKey) {
    let url = 'https://newsapi.org/v2/sources?country=us&apiKey=' + apiKey;
    //fetch(url)

    let req = new Request(url);
    let response = await fetch(req);
    let json = await response.json();
    return json.sources;
}

export async function GetNews(currentPage, pageSize, q, source, apiKey = API_KEY){

    if(q !== '' && typeof(q) !== 'undefined'){
        q = '&q=' + q;
    }
    else{ 
        q='';
    }

    if(source !== '' && typeof(source) !== 'undefined'){
        source = '&sources=' + source; 
    }
    else{
        source = '';
    }

    let url = 'https://newsapi.org/v2/top-headlines?language=en&page=' + currentPage +
     '&pageSize=' + pageSize + q + source + '&apiKey=' + apiKey;

    let req = new Request(url);
    let response = await fetch(req);
    let json = await response.json();
    console.log('request');
    console.log(json);
    return json.articles;
}