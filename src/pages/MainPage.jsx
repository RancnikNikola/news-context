
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TopArticleContext } from '../context/top-articles.context';
import HeaderItem from "../components/header-item/header-item.component";
import RowItem from "../components/row-item/row-item.component";
import './main-page.styles.scss';


const MainPage = () => {

  const { topArticles } = useContext(TopArticleContext);

    return (
      <div className="flexbox-container">
      <div className="row">
        {topArticles.slice(0, 1).map((article, index) => (
          <div key={index} className="item-full-row">
            <Link to={`article/${article.title}`}>
              <HeaderItem article={article} />
            </Link>
          </div>
        ))}
      </div>
      <div className="row-second">
        {topArticles.slice(1, 4).map((article, index) => (
          <div key={index} className="item">
            <RowItem article={article} />
          </div>
        ))}
      </div>
      <div className="articles-footer">
      <div className="row-last">
        {topArticles.slice(4, 9).map((article, index) => (
          <div key={index} className="item">
            <RowItem article={article} />
          </div>
        ))}
      </div>
      <div className="row-last-addition">
          <h1>a</h1>
      </div>
      </div>
     
    </div>
    )
}

export default MainPage;