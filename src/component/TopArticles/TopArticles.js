import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TopArticles = () => {

    const [articles, setArticles]= useState([]);

    useEffect(() => {
        fetch("https://shielded-peak-65069.herokuapp.com/showarticles")
        .then(res=>res.json())
        .then(data=>setArticles(data))
    },[]);

    //console.log(articles)

    return (
        <div>
            <Container>
            <div className="text-center">
                <h1 className="py-5 page-title">Top Articles</h1>
            </div>
            <Row xs={1} lg={2} md={2} sm={1} className="g-5 mx-3">
                        {articles.map( article => (
                            <Col key={article.key} >
                                <Card className="card-design">
                                    <Row>
                                        <Col>
                                            <Card.Img className="w-100 mx-auto p-3" variant="top" src={article.imageURL} />
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Title>Article by <span className="fw-bolder creator-name">{article.Name}</span></Card.Title>
                                                <Card.Text>{article.Article}</Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
            </Container>
        </div>
    );
};

export default TopArticles;