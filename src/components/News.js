import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticle, setTotalArticle] = useState(0);

  const update = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(parsedData.articles);
    setTotalArticle(parsedData.totalResults);
    setLoading(false);
  };

  const capitalizeFirst=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  useEffect(() => {
    document.title=`${capitalizeFirst(props.category)}-DailyDose`;
    update();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextClick = async () => {
    update();
    setPage(page + 1);
  };
  const handlePrevClick = async () => {
    update();
    setPage(page - 1);
  };

  return (
    <div className="container" style={{marginTop:'65px'}}>
      <h2>Top Headlines-{capitalizeFirst(props.category)}</h2>
      {loading && <Loader />}
      <div className="row my-3">
        {!loading &&
          article.map((ele) => {
            return (
              <div className="col-md-3 my-3" key={ele.url}>
                <NewsItem
                  source={!ele.source.name ? "NA" : ele.source.name}
                  author={!ele.author ? "Unknown" : ele.author}
                  publishdate={ele.publishedAt != null    ? new Date(ele.publishedAt).toGMTString().slice(0, -12)    : "NA"}
                  title={ele.title != null     ? ele.title.slice(0, 40) + "....."     : "Title not available" }
                  description={ele.description != null  ? ele.description.slice(0, 80) + "....."  : "Description not available. Click on read more for more details."}
                  imgUrl={ele.urlToImage}
                  newUrl={ele.url}
                />
              </div>
            );
          })}
      </div>

      <div className="d-flex justify-content-between mb-3">
        <button disabled={page <= 1} type="button" onClick={handlePrevClick} className="btn btn-dark btn-sm mx-5" > &larr; Prev
        </button>
        <button disabled={page + 1 > Math.ceil(totalArticle / props.pageSize) } type="button" onClick={handleNextClick} className="btn btn-dark btn-sm mx-2" >  Next &rarr;
        </button>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
