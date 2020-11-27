import React from 'react';
import axios from 'axios';


export default class NewsList extends React.Component {
    state = {
        news: []
    }

    componentDidMount() {
        axios.get('https://agile-cliffs-83142.herokuapp.com/api/news').then(res => {
            this.setState({ news: res.data });
        })
    }

    render() {
        return (
            <div>
                <ul>
                { this.state.news.map(newss => 
                <div>
                    <p className="title" key={newss.id}>{newss.title}</p>
                    <p className="detail">{newss.detail}</p>
                </div>
                )}
            </ul>
            </div>
        )
    }
}