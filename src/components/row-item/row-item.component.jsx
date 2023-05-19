

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TopArticleContext } from '../../context/top-articles.context';
import './row-item.styles.scss';

const RowItem = ({ article }) => {

    const { title, urlToImage, publishedAt } = article;
    const { setSingleItem } = useContext(TopArticleContext);

    const date = new Date(publishedAt);
    const formattedDateTime = date.toLocaleString();

    return (
        <div className='row-item-container'>
            <div className='row-content'>
                <p>{formattedDateTime}</p>
                <h1>{title}</h1>
                <div className='row-tags'>
                    <Link to={`article/${article.title}`}>
                        enter
                    </Link>
                </div>
            </div>
            <div className='row-image'>
                <img src={urlToImage} alt='alt' />
            </div>
        </div>
    )
}

export default RowItem;