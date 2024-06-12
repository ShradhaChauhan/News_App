import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Proptypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'business',
    headline: 'Top Headlines'
  }

  static propTypes = {
    country: Proptypes.string,
    pageSize: Proptypes.number.isRequired,
    category: Proptypes.string,
    headline: Proptypes.string.isRequired
  }

  constructor(props){    
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = "NewsPrep - " + this.props.headline + " News";
  }
  async componentDidMount(){
    this.updatePage();
  }

  async updatePage(){
    this.props.setProgress(0);
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/Top-Headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, page: this.state.page, loading: false});
    this.props.setProgress(100);
  }

  myStyle = {
    backgroundColor: '#0E5CE3',
    color: '#ffffff'
  }

  fetchMoreData = async() => {
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/Top-Headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page + 1});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page,
      loading: false
    });
  };

  render() {
    return (
      <div className='my-4 py-5'>
        <h2 className='text-center'>Top {this.props.headline} Headlines</h2>
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinner/>}>
          <div className='container'>
            <div className='row'>            
              {this.state.articles.map((e) => {
                return <div className='col-md-4' key={e.title}>
                  <NewsItem title={e.title?e.title:""} description={e.description?e.description.slice(0, 88):""} imgUrl={e.urlToImage?e.urlToImage:""} newsUrl={e.url?e.url:""} author={e.author} date={e.publishedAt} source={e.source.name} />
                </div>
              })}
            </div>     
          </div>     
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
