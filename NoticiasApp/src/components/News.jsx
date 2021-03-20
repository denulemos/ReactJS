import React from "react";
import {connect} from "react-redux";

import {getHomePageNews, newsItemSeen} from "../state/actions";
import NewsItem from "./NewsItems";

import "./News.css";

class News extends React.Component {

    state = {
        nextVanish: null
    }

    componentDidMount() {
        this.props.getNews();
    }

    handleNewsItemClick = (id) => {
        const x = this.props.setNewsSeen(id).then(() => {
            this.setState({
                nextVanish: id
            })
        });
        ;
    }

    getNotSeen = () => {
        return this.props.news.filter(newsItems => !newsItems.seen);
    }

    render() {
        return (
            <>
                <h1>Noticias ({this.getNotSeen().length} restantes)</h1>
                <div className='newsContainer'>
                    {this.getNotSeen().map(newsItem => {
                        let willVanish = false;
                        if (this.state.nextVanish === newsItem.id) {
                            willVanish = true;
                        }
                        return <NewsItem key={newsItem.id} newsItem={newsItem} handleClick={this.handleNewsItemClick}
                                         willVanish={willVanish}/>;
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news
});

const mapDispatchToProps = dispatch => ({
    getNews: (news) => dispatch(getHomePageNews(news)),
    setNewsSeen: (id) => {
        return dispatch(newsItemSeen(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
