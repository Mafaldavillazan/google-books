import React, { Component } from "react";
import API from "../utils/API";

import DeleteBtn from "../components/DeleteBtn";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

import Jumbotron from "../components/Jumbotron";

class Saved extends Component {
  state = {
    books: []
  };

  handleDelete = (id) => (event) => {
    event.preventDefault();
    API.deleteBook(id).then(() => {
      this.setState({
        books: this.state.books.filter(book => book._id !== id)
      });
    });
  };

  componentDidMount = () => {
    this.getBooksForDisplay();
  };

  getBooksForDisplay = () => {
    API.getBooks().then(books => this.setState({ books }))
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <div>
              <h1>Books that are saved</h1>
            </div>
            <Col size="xs-12">

              <BookList>
                {this.state.books.map(book => (
                  <BookListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={this.handleDelete(book._id)} />
                  </BookListItem>
                ))}
              </BookList>
              ) : (
              <h3>No Results to Display</h3>
              )}
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;