import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize:6,
        category:"general"
      }

    static propTypes = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string

      }

   capitalizeFirstLetter(str) {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }
    

    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
    }

    async updateNews(){

        this.setState({loading:true})
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab166e8d54b14466866c2062ba98ee29&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    }
    
    async componentDidMount() {
        
        // this.setState({loading:true})
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab166e8d54b14466866c2062ba98ee29&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});

        this.updateNews();
    }



    handleNextClick =  async() =>{

        // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            
        //     this.setState({loading:true})
        //     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab166e8d54b14466866c2062ba98ee29&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({articles:parsedData.articles,page:this.state.page +1,loading:false});
        // }
        this.setState({page:this.state.page +1});
        this.updateNews();

        
       
    }

    handlePrevClick =  async() =>{
        // this.setState({loading:true})
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ab166e8d54b14466866c2062ba98ee29&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({articles:parsedData.articles,page:this.state.page -1,loading:false});
        this.setState({page:this.state.page - 1});
        this.updateNews();

    }
    
    render() {
        return (
        
            <div className="container my-3">
                <h1 className ='text-center' style={{margin:"40px 0",marginTop:"80px"}}>NewsMonkey- Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1> 
                {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && 
                    this.state.articles.map((article,id)=>{
                    return(
                            <div className="col-md-4" key={id}>
                            <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name}/>
                            </div>
                    )
                    })
                }
            </div>  

            <div className="container d-flex justify-content-between my-3">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick} > &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>             
            
            </div>
        
        )
    }
}
