import React, { Component } from "react";
import API from "../utils/API";

import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

import Input from "../components/Input";
import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              <BookList>
                {this.state.books.map(books => (
                  <BookListItem key={books.href} title={books.title} />
                ))}
              </BookList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;