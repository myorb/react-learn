import React from 'react'
import Article from './Article'
export default function ArticleList({articles}){
    //const aElemts = articles.map((article) => <li key = {article.id}><Article article = {article}/></li>)
    const aElemts = articles.map(function(article) {return <li key = {article.id}><Article article = {article}/></li>})

    return (
        <ul>
            {aElemts}
        </ul>
    )
}