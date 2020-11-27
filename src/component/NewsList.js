import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';


export default class NewsList extends React.Component {
    state = {
        news: [],
        newNewsData: {
            title: '',
            detail: ''
          },
          newNewsModal: false
    }

    componentDidMount() {
        axios.get('https://agile-cliffs-83142.herokuapp.com/api/news').then(res => {
            this.setState({ news: res.data });
        })
    }

    toggleNewNewsModel() {
        this.setState({
          newNewsModal: !this.state.newNewsModal
        })
      }
    
      addNews() {
        axios.post('https://agile-cliffs-83142.herokuapp.com/api/news', this.state.newNewsData).then((res) => {
          let { news } = this.state
    
          news.push(res.data)
    
          this.setState({
            news, newNewsModal: false, newNewsData: {
              title: '',
              detail: ''
            }
          })
        })
      }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggleNewNewsModel.bind(this)}>Add News</Button>
                <Modal isOpen={this.state.newNewsModal} toggle={this.toggleNewNewsModel.bind(this)}>
                  <ModalHeader toggle={this.toggleNewNewsModel.bind(this)}>Add a new news</ModalHeader>
                  <ModalBody>
                    <FormGroup>
                      <Label for="title">Title</Label>
                      <Input id="title" value={this.state.newNewsData.title} onChange={(e) => {
                        let { newNewsData } = this.state;

                        newNewsData.title = e.target.value;

                        this.setState({ newNewsData });
                      }} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="detail">Detail</Label>
                      <Input id="detail" value={this.state.newNewsData.detail} onChange={(e) => {
                        let { newNewsData } = this.state;

                        newNewsData.detail = e.target.value;

                        this.setState({ newNewsData });
                      }} />
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.addNews.bind(this)}>Add News</Button>{' '}
                    <Button color="secondary" onClick={this.toggleNewNewsModel.bind(this)}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                <ul>
                { this.state.news.map(newss => 
                <div>
                    <p key={newss.id} className="title">{newss.title}</p>
                    <p className="detail">{newss.detail}</p>
                </div>
                )}
            </ul>
            </div>
        )
    }
}