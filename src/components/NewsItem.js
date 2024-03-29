import React from 'react';
import imgNA from '../imgNA.png';

const NewsItem =(props)=>{
    
    let {title,description,imgUrl,newUrl,publishdate,author,source}=props;
    return (
      <div>
        <div className="card">
          <img src={imgUrl!=null?imgUrl:imgNA}  className="card-img-top newsImg" alt="img" />
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%'}}>{source}</span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-justify fw-light fst-italic lh-1">By {author}</p>
            <p className="card-text text-justify fw-light fst-italic lh-1">On {publishdate}</p>
            <p className="card-text text-justify">{description}</p>
            <a rel='noreferr' href={newUrl} className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    ) 
}
export default NewsItem;

