import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  let districts = [
    {
      id: 1,
      title: "Trivandrum",
      desc: "Capital City",
      image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a9/f3/43/great-views.jpg?w=800&h=-1&s=1",
    },
    {
      id: 2,
      title: "Kollam",
      desc: "Port City",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592-400x210.jpg",
    },
    {
      id: 3,
      title: "Pathanamthitta",
      desc: "Pilgrim Center",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gavi%2C_Kerala.jpg/1280px-Gavi%2C_Kerala.jpg",
    },
    {
      id: 4,
      title: "Alappuzha",
      desc: "Backwater Destination",
      image: "https://example.com/alappuzha.png",
    },
    {
      id: 5,
      title: "Kottayam",
      desc: "Lakeside Retreat",
      image: "https://example.com/kottayam.png",
    },
    {
      id: 6,
      title: "Idukki",
      desc: "Hill Station",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592-400x210.jpg",
    },
    {
      id: 7,
      title: "Ernakulam",
      desc: "Commercial Hub",
      image: "https://example.com/ernakulam.png",
    },
    {
      id: 8,
      title: "Thrissur",
      desc: "Cultural Capital",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592-400x210.jpg",
    },
    {
      id: 9,
      title: "Palakkad",
      desc: "Gateway to Kerala",
      image: "https://example.com/palakkad.png",
    },
    {
      id: 10,
      title: "Malappuram",
      desc: "Land of Teak",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592-400x210.jpg",
    },
    {
      id: 11,
      title: "Kozhikode",
      desc: "City of Spices",
      image: "https://example.com/kozhikode.png",
    },
    {
      id: 12,
      title: "Wayanad",
      desc: "Green Paradise",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592-400x210.jpg",
    },
    {
      id: 13,
      title: "Kannur",
      desc: "Land of Looms and Lores",
      image: "https://example.com/kannur.png",
    },
    {
      id: 14,
      title: "Kasaragod",
      desc: "Northernmost District",
      image: "https://www.keralatourism.org/images/destination/mobile/aquatourism_in_kasaragod20131107114603_306_1.jpg",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          {
          districts.map((e) => (
            <Col key={e.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>
                    {e.desc}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
