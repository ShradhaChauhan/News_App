import React, { Component } from 'react'

export class NewsItem extends Component {
  
  itemStyle = {
    backgroundColor: '#e30e5c',
    border: '1px solid #e30e5c',
    color: '#ffffff'
  }

  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imgUrl?"https://www.thehindu.com/news/national/yfzd3o/article34559558.ece/ALTERNATES/LANDSCAPE_615/ParliamentHouse":imgUrl} width="200px" height="180px" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><span className='badge rounded-pill text-bg-secondary float-end'>{source}</span> {title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text mb-5'><small className='text-muted'>By {author?author:"Unknown"} on {date?new Date(date).toGMTString().slice(0, 16):"Unknown"}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" style={this.itemStyle} className="btn btn-sm btn-primary position-absolute bottom-0 mb-3">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
