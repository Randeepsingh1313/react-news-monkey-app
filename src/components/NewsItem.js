import React from 'react'

const NewsItem = (props) => {
  
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card"> 
                    <img src={ !imageUrl?"https://cdn.pixabay.com/photo/2012/04/10/23/27/canada-27003_1280.png":imageUrl } className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle px-2 py-2 badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span></h5>
                    
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By { !author?"Unknown": author} on { new Date(date).toGMTString() }</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem