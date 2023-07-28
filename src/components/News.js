import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import { Spin } from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    // always use super() to write constructer()

    document.title = `NewsWire - ${capitalizeFirstLetter(props.category)}`


    // async function 


    const updateNews = async () => {

        props.setProgress(10);
        //api key cd9a4e2107264c8eb5b56f4dd1d5fa73 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData);
        setarticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)


        props.setProgress(100);

    }

    useEffect(() => {
        updateNews();

        return () => {
        };
        // eslint-disable-next-line 
    }, []);


    const fetchMoreData = async () => {
        
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData);
        setarticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)

    };





    return (
        <div className='container my-5 d-flex-column p-5 '>
            {loading && <  Spin />}
            <h2 className='my-3 d-flex justify-content-center '>Top headlines : {capitalizeFirstLetter(props.category)}  </h2>


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spin />}
            >
                <div className="container">

                    <div className="row" >


                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 my-6" key={element.url}>
                                    <NewsItems title={
                                        element.title ? element.title.slice(0, 32) : ""
                                    }
                                        description={element.description ? element.description.slice(0, 88) : ""}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            )
                        })}
                    </div >
                </div>
            </InfiniteScroll>

        </div>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'genral'


}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
