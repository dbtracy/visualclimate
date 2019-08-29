import React, { Component } from 'react';
import '../Blog/ArticleView.css'
import ArticleInArticleView from './ArticleInArticleView'
import { Link } from 'react-router-dom'

const array = [
    {
        title: 'CLIMATE CHANGE DIGEST JULY 2019',
        introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam nemo dolor nulla hic porro dolore, veniam nobis alias. Quos animi temporibus dolorem inventore. Nostrum eius iste sequi officia nulla.',
        date: 'Jul 2, 2019',
        id: 0
    },
    {
        title: 'CLIMATE CHANGE DIGEST JULY 2018',
        introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam nemo dolor nulla hic porro dolore, veniam nobis alias. Quos animi temporibus dolorem inventore. Nostrum eius iste sequi officia nulla.',
        date: 'Jan 1, 2018',
        id: 1
    },
    {
        title: 'HOW TESLA CAN HELP US?',
        introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam nemo dolor nulla hic porro dolore, veniam nobis alias. Quos animi temporibus dolorem inventore. Nostrum eius iste sequi officia nulla.',
        date: 'Mar 8, 2017',
        id: 2
    }
]

class ArticleView extends Component {
    render() {
        return (
            <div className="no-navbar">
                <div className="wrapper">
                    <center><Link to=''><div className="site-title" style={{ marginTop: '150px' }}> Thoughts on Climate Change</div></Link></center>
                </div>
                <div className="wrapper site-description">
                    <center>a blog</center>
                </div>
                <div className='page-content'>
                    <div className='wrapper'>
                        <div className='home'>
                            {array.map(element => (
                                <ArticleInArticleView data={element} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleView
