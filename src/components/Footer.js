import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return(
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="12" className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo-light.png" alt="logo" />
              </Link>
            </div>
            <ul className="footer-links m-0 p-0">
              <li className="footer-link-item">
                © Worldwide Copyright Reserved. <Link to="/" className="footer-link">Felix</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/" className="footer-link">Powered by Felix</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/" className="footer-link">Admin Login</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  ); 
}
