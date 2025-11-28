import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Exp1Page from './pages/Exp1Page';
import Exp2Page from './pages/Exp2Page';
import Exp3Page from './pages/Exp3Page';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* --- NAVIGATION BAR --- */}
      <Navbar variant="dark" expand="lg" fixed="top" style={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Trichoderma harzianum
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/exp1">Exp 1: Anaerobic</Nav.Link>
              <Nav.Link as={Link} to="/exp2">Exp 2: UV</Nav.Link>
              <Nav.Link as={Link} to="/exp3">Exp 3: Competition</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* --- SPORE DECORATION (Left) --- */}
        <div style={{ position: 'absolute', bottom: '-25px', left: '-10px', display: 'flex', alignItems: 'flex-end', zIndex: -1 }}>
          <div style={{ position: 'absolute', top: '-25px', left: '25px', width: '10px', height: '10px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
          <div style={{ position: 'absolute', top: '-10px', left: '45px', width: '15px', height: '15px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '9px', height: '9px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
          <div style={{ width: '50px', height: '50px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
          <div style={{ width: '30px', height: '30px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginLeft: '-15px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginLeft: '-5px', marginBottom: '-5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
        </div>

        {/* --- SPORE DECORATION (Right) --- */}
        <div style={{ position: 'absolute', bottom: '-25px', right: '-10px', display: 'flex', alignItems: 'flex-end', zIndex: -1 }}>
          <div style={{ position: 'absolute', top: '-20px', right: '35px', width: '12px', height: '12px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '7px', height: '7px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginRight: '-5px', marginBottom: '-5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
          <div style={{ width: '30px', height: '30px', backgroundColor: '#1b4d2e', borderRadius: '50%', marginRight: '-15px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
          <div style={{ width: '50px', height: '50px', backgroundColor: '#1b4d2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%' }}></div></div>
        </div>
      </Navbar>

      {/* --- CONTENT CONTAINER --- */}
      <div style={styles.contentSpacer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exp1" element={<Exp1Page />} />
          <Route path="/exp2" element={<Exp2Page />} />
          <Route path="/exp3" element={<Exp3Page />} />
        </Routes>
      </div>

    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#1b4d2e', 
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1050, 
    overflow: 'visible' 
  },
  contentSpacer: {
    paddingTop: '100px',
    paddingBottom: '50px'
  }
};

export default App;
