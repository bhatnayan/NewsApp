import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
           {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left: '85%'}}>{source}</span> */}
           <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageUrl?imageUrl: "https://cdn.sanity.io/images/s3y3vcno/production/c397ec470875d547d7ecf10a967c19f1a197d7fc-1919x1080.jpg?auto=format&w=960&h=540&crop=focalpoint&fit=clip&q=75&fm=jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )}

export default NewsItem
