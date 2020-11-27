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
        editNewsData: {
            id: '',
            title: '',
            detail: ''
        },
        newNewsModal: false,
        editNewsModal: false
    }

    componentDidMount() {
        this._refreshNews();
    }

    toggleNewNewsModel() {
        this.setState({
            newNewsModal: !this.state.newNewsModal
        })
    }

    toggleEditNewsModel() {
        this.setState({
            editNewsModal: !this.state.editNewsModal
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

    updateNews() {
        let { title, detail } = this.state.editNewsData;
        axios.put('https://agile-cliffs-83142.herokuapp.com/api/news/' + this.state.editNewsData.id, {
            title, detail
        }).then((res) => {
            this._refreshNews();

            this.setState({
                editNewsModal: false, editNewsData: { id: '', title: '', detail: '' }
            })
        })
    }

    editNews(id, title, detail) {
        this.setState({
            editNewsData: { id, title, detail }, editNewsModal: !this.state.editNewsModal
        })
    }

    _refreshNews() {
        axios.get('https://agile-cliffs-83142.herokuapp.com/api/news').then(res => {
            this.setState({ news: res.data });
        })
    }

    deleteNews(id){
        axios.delete('https://agile-cliffs-83142.herokuapp.com/api/news/' + id).then((res) => {
            this._refreshNews();
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

                <Modal isOpen={this.state.editNewsModal} toggle={this.toggleEditNewsModel.bind(this)}>
                    <ModalHeader toggle={this.toggleEditNewsModel.bind(this)}>Edit a news</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title" value={this.state.editNewsData.title} onChange={(e) => {
                                let { editNewsData } = this.state;

                                editNewsData.title = e.target.value;

                                this.setState({ editNewsData });
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="detail">Detail</Label>
                            <Input id="detail" value={this.state.editNewsData.detail} onChange={(e) => {
                                let { editNewsData } = this.state;

                                editNewsData.detail = e.target.value;

                                this.setState({ editNewsData });
                            }} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateNews.bind(this)}>Update News</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditNewsModel.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <ul>
                    {this.state.news.map(newss =>
                        <div>
                            <p key={newss.id} className="title">{newss.title}</p>
                            <p className="detail">{newss.detail}</p>
                            <Button color="success" size="sm" className="mr-2" onClick={this.editNews.bind(this, newss.id, newss.title, newss.detail)}>Edit</Button>
                            <Button color="danger" size="sm" onClick={this.deleteNews.bind(this, newss.id)}>Delete</Button>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}