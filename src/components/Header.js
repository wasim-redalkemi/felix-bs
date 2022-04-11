import { Container, Row, Col, Image, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return(
    <header className="header">
      <Container>
        <Row>
          <Col xs={12}>
            <Navbar expand="lg" className="py-0">
              <Navbar.Brand href="/" className="logo"><Image src="/assets/images/logo.png" alt="logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="header-nav" />
              <Navbar.Collapse id="header-nav">
                <Nav className="ms-auto">
                  <NavLink to="/" className={(navData) => "nav-link " + (navData.isActive ? "selected" : "")}>Features</NavLink>
                  <NavLink to="/" className={(navData) => "nav-link " + (navData.isActive ? "selected" : "")}>Showcase</NavLink>
                  <NavLink to="/" className={(navData) => "nav-link " + (navData.isActive ? "selected" : "")}>Resell Felix</NavLink>
                  <NavLink to="/contact" className={(navData) => "nav-link header-btn " + (navData.isActive ? "selected" : "")}>Get Started</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  ); 
}
