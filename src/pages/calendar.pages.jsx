
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { EverythingArticlesContext } from '../context/everything-articles.context';
import HeaderItem from '../components/header-item/header-item.component';
import './calendar.styles.scss';


const Calendar = () => {

    const { everythingArticles, sortOption, sortData, handleSortChange } = useContext(EverythingArticlesContext);

    console.log('EVERY', everythingArticles);

    useEffect(() => {
      sortData();
    }, [sortOption]);

    return (
    <>
    <div className='sort-container'>
        <select value={sortOption} onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    </div>
    <div class="container">
        {everythingArticles.map((article, index) => (
          <div key={index} className="item">
            <Link to={`article/${article.title}`}>
              <HeaderItem article={article} />
            </Link>
          </div>
        ))}
    </div>
    </>
    )
}

export default Calendar;