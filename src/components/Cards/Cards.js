import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import './cards.css'


export const StyleCard = (props) => (
  <Card>
      <Card.Body >
    <span className="img__style"><Card.Img tabindex="0" src={props.image} alt ={props.alt}/></span>
      <Card.Title tabindex="0" >{props.title}
      </Card.Title>
      {/* <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle> */}
      <Card.Text tabindex="0">
        {props.text}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
      <a href={props.reference}>{props.fonte}</a>
      {/* <Card.Link href="#">{props.reference}</Card.Link> */}
    </Card.Body>
  </Card>
)

export const BlockQuote = () => (
  <Container className="quote__container">
    <Card className="p-3">
      <blockquote className="blockquote mb-0 card-body">
        <div tabindex="0"className="quote__style"><p>
          "O poder da Web está em sua universalidade. O acesso de todos, independentemente da deficiência, é um aspecto essencial."</p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Tim Berners-Lee, <cite title="Source Title">diretor do W3C e inventor da World Wide Web</cite>
            </small>
          </footer>
        </div>

      </blockquote>
    </Card>
  </Container>
)



