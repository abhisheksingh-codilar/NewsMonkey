import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
        return (
            <div className="my-3">
               <div className="card">
               <span class="position-absolute top-0 start-100  badge rounded-pill bg-danger" style={{zIndex:'1', transform:'translate(-100%,-50%)'}}>
                      {source}
                </span>
                        <img src={imageUrl?imageUrl:"http://www.niijiiradio.com/wp-content/uploads/2016/10/News-Image-3.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p class="card-text">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
