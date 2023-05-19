import { useContext } from 'react';
import { TopArticleContext } from '../../context/top-articles.context';
import { Link } from 'react-router-dom';
import './single-item.styles.scss';

const SingleItem = () => {

    // const date = new Date(publishedAt);
    // const formattedDateTime = date.toLocaleString();


    return (
        <div className='header-item-container'>
            <div className='header-content'>
                <div className='article-title' onClick={''}>
                    <h1>{}</h1>
                </div>
                <div className='article-tags'>
                    <span>kategorija</span>
                    <span>vrijeme citanja 5 min</span>
                </div>
                <div className='article-date'><p>{'formattedDateTime'}</p></div>
            </div>
            <div className='header-image'>
                <img src={'urlToImage'} alt='alt' />
            </div>
        </div>
    )
}

export default SingleItem;