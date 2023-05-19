import { useContext, useEffect, useState } from 'react';
import { TopArticleContext } from '../../context/top-articles.context';
import { Link } from 'react-router-dom';
import './header-item.styles.scss';

const HeaderItem = ({ article }) => {

        // Regular expression pattern
        const pattern = /\[(\+\d+) chars\]/g;
    
        // Find all matches of the pattern in the text
        const matches = (article.content.match(pattern) || []).map((match) => {
          // Extract the number from the matched pattern
          const number = match.match(/\+(\d+)/)[1];
            return number;
        });

      console.log('EE', matches);


         // Average reading speed (in words per minute)
         const wordsPerMinute = 200;

         // Estimate the number of words in the text
         const wordCount = article.content.trim().split(/\s+/).length;

         console.log('WORD COUNT', wordCount);
         console.log('WORD COUNT PARSE', wordCount + parseInt(matches));
     
         // Calculate the reading time in minutes
         const readingTimeInMinutes = Math.ceil(wordCount / wordsPerMinute);
    
         console.log('READING', readingTimeInMinutes);
    
        const date = new Date(article.publishedAt);
        const formattedDateTime = date.toLocaleString();


    return (
        <div className='header-item-container'>
            <div className='header-content'>
                <div className='article-title'>
                    <h1>{article.title}</h1>
                </div>
                <div className='article-tags'>
                    <span>{article.author}</span>
                    <span>vrijeme citanja {readingTimeInMinutes} min</span>
                </div>
                <div className='article-date'><p>{formattedDateTime}</p></div>
            </div>
            <div className='header-image'>
                <img src={article.urlToImage} alt='alt' />
            </div>
        </div>
    )
}

export default HeaderItem;