import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ArticleList from './components/ArticleList';
import {articles} from './a-text';

ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));
registerServiceWorker();
