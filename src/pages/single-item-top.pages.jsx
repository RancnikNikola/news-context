
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TopArticleContext } from '../context/top-articles.context';
import { FaFacebookF, FaTwitter, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './single-item.styles.scss';

const SingleItemTop = () => {

    const { topArticles, setSingleItem, topArticle } = useContext(TopArticleContext);
    const { articleId } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
          try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${articleId}&apiKey=47bbec3a79074aab9cd91542f4ccce46`);
            const data = await response.json();
            setSingleItem(data.articles[0]);
          } catch (error) {
            console.error('Error fetching item:', error);
          }
        };
    
        fetchItem();
      }, []);

    const date = new Date(topArticle.publishedAt);
    const formattedDateTime = date.toLocaleString();




    return (
        <div className='single-item-container'>
           <div className='single-item-content'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eum consectetur eos? Autem adipisci atque ipsum
                maiores deserunt illum consectetur eaque dignissimos quibusdam optio vero ipsam praesentium neque, unde ex
                voluptatum! Sapiente, incidunt nam. Rem impedit ad molestiae quibusdam deleniti fugiat eius? Necessitatibus consequuntur
                impedit nemo consectetur ex tenetur voluptate dolorem. Iusto iure cumque libero deleniti reprehenderit reiciendis
                rerum beatae molestias recusandae omnis perspiciatis aliquid minima consectetur tempora non expedita itaque suscipit,
                sed corrupti eum culpa fugit! Saepe ullam maiores, sit rerum quam debitis tenetur inventore exercitationem? Adipisci 
                enim modi blanditiis tempora veritatis consequuntur aliquam, accusamus provident nobis est. In adipisci obcaecati corporis 
                expedita iste, laudantium molestiae quae, sint dignissimos excepturi dolorem, consequuntur voluptates minus ex rerum ad 
                laborum sed cupiditate optio! Itaque maxime voluptates soluta in maiores hic sint atque commodi sequi culpa. Ex eveniet
                quo vero odio consequatur, eaque aut modi! Corporis eligendi recusandae quam, tempore deleniti quidem quisquam repellendus 
            </p>
            <div className='single-item'>
                <span>zuto</span>
                <div className='header-item-container'>
            <div className='header-content'>
                <div className='article-title'>
                    <h1>{topArticle.title}</h1>
                </div>
                <div className='article-tags'>
                    <span>{topArticle.author}</span>
                    <span>vrijeme citanja {'readingTimeInMinutes'} min</span>
                </div>
                <div className='article-date'><p>{formattedDateTime}</p></div>
            </div>
            <div className='header-image'>
                <img src={topArticle.urlToImage} alt='alt' />
            </div>
        </div>
            </div>
            <p>
                {/* dolorem delectus? Delectus saepe nostrum incidunt aliquam. Accusamus ea possimus ratione incidunt repellendus dignissimos beatae, 
                nam, at, quia provident eligendi non ipsam soluta sapiente fugiat consectetur unde adipisci veritatis nemo facilis! Laborum quis
                doloremque natus architecto excepturi odio harum vel deserunt minus blanditiis quia debitis voluptatem voluptatum ipsa facilis 
                tenetur, nemo animi exercitationem quasi aliquam soluta quam quas corrupti? Atque deleniti assumenda dolores, cupiditate inventore 
                voluptas autem culpa eum obcaecati alias voluptatem magni tempora soluta cumque velit dignissimos facilis beatae blanditiis, nam, 
                eius veniam architecto totam repudiandae non! Doloribus cum sint repellat eius voluptatum culpa reprehenderit placeat ducimus, eum 
                accusamus. Qui optio minus possimus vitae rerum illum voluptates unde, consequuntur maxime dolore. Nobis, in commodi dolore 
                aliquam velit quod id, illo, aspernatur unde similique asperiores nam odit fugiat natus non aliquid porro perspiciatis cupiditate 
                doloribus quae corrupti! Necessitatibus quae ducimus aliquam voluptates laudantium, corporis consectetur eius! Harum rerum 
                laboriosam voluptas dolorem minima, odit sint non modi pariatur, mollitia itaque, sit consectetur accusantium. Accusantium, 
                molestiae praesentium ipsum odit itaque consequatur esse suscipit nostrum maiores repellat earum placeat a veritatis cum dolores 
                eveniet saepe minus quod excepturi fuga eaque architecto nulla obcaecati harum. Earum eius iure corrupti officiis! Consequatur 
                explicabo labore, repellendus unde natus veniam iusto rerum possimus id hic cum, laborum minima debitis delectus porro, pariatur 
                aperiam laudantium distinctio assumenda? Eveniet dolor, ullam ducimus reprehenderit magnam dolorum quas veniam nemo perferendis 
                aliquam magni facere nostrum nobis, inventore molestias officiis cum! Nisi nemo fugit ipsa modi cum optio, eaque veniam! */}
                {
                    topArticle.content
                }
                
            </p>
            <div className='single-item-footer'>
                <span>zuto</span>
                <span>share:</span>
                <div className='single-item-footer-icons'>
                    <div className='next-previous'>
                        <span><FaChevronLeft /></span>
                        <span><FaChevronRight /></span>
                    </div>
                    <div className='social-media'>
                        <span><FaFacebookF /></span>
                        <span><FaTwitter /></span>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default SingleItemTop;