import { createContext, useState, useEffect } from "react";

export const TopArticleContext = createContext({
    topArticles: [],
    setTopArticles: () => {},
    topArticle: {},
    setSingleItem: () => {}
});


export const TopArticlesProvider = ({ children }) => {

    const [ topArticles, setTopArticles ] = useState([]);
    const [ topArticle, setTopArticle ] = useState({});

    const setSingleItem = (itemData) => {
      setTopArticle(itemData);
    };


    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=47bbec3a79074aab9cd91542f4ccce46');
          const data = await response.json();
          setTopArticles(data.articles);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const value = { topArticles, setSingleItem, topArticle };

    return <TopArticleContext.Provider value={value}>{ children }</TopArticleContext.Provider>
}