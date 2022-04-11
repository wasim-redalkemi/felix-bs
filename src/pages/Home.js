import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home">
      <section className="home-banner">
        <Container>
          <Row className="align-items-center">
            <Col md="6" xs="12" className="text-outer">
              <h1 className="banner-heading">Websites<br />Made Easy</h1>
              <p className="banner-desc">For the business and the owner</p>
              <p className="banner-link-btn"><Link to="/" className="btn">Get a Free Consultation</Link></p>
            </Col>
            <Col md="6" xs="12" className="img-outer">
              <Image src="/assets/images/felix-illustration.png" alt="Illustration" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
