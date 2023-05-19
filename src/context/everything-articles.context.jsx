import { createContext, useState, useEffect } from "react";

export const EverythingArticlesContext = createContext({
    everythingArticles: [],
    everythingArticle: {},
    setSingleItemE: () => {},
    setSortOrder: () => {}
});


export const EverythingArticlesProvider = ({ children }) => {

    const [ everythingArticles, setEverythingTopArticles ] = useState([]);
    const [ sortedEverythingArticles, setsortedEverythingArticles ] = useState([]);
    const [ sortOption, setSortOption ] = useState('default');
    const [ everythingArticle, setEverythingArticle ] = useState({});


    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=47bbec3a79074aab9cd91542f4ccce46');
          const data = await response.json();
          setEverythingTopArticles(data.articles);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const handleSortChange = (event) => {
        setSortOption(event.target.value);
      };
    
      const sortData = () => {
        let sortedData = [...everythingArticles];
    
        if (sortOption === 'asc') {
            sortedData.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
        } else if (sortOption === 'desc') {
            sortedData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        }
    
        setEverythingTopArticles(sortedData);
      };

      const setSingleItemE = (itemData) => {
        setEverythingArticle(itemData);
      };

    const value = { everythingArticles, sortOption, sortData, handleSortChange, everythingArticle, setSingleItemE };

    return <EverythingArticlesContext.Provider value={value}>{ children }</EverythingArticlesContext.Provider>
}