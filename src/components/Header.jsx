import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/css/Header.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/hcmut.jpg';

export function LoginHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/MyFridge">
                <Image src={logo} className="img-fluid" style={{ maxWidth: '30px', height: 'auto' }} />
                {' '}
                MY FRIDGE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/fridge">Tủ lạnh của tôi</Nav.Link>
                        <Nav.Link as={Link} to="/scan">Quét sản phẩm</Nav.Link>
                        <Nav.Link as={Link} to="/user">User</Nav.Link>
                        <Nav.Link as={Link} to="/MyFridge"> Đăng xuất</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export function AppHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/MyFridge">
                <Image src={logo} className="img-fluid" style={{ maxWidth: '30px', height: 'auto' }} />
                {' '}
                MY FRIDGE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}

export function GuestHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/MyFridge">
                <Image src={logo} className="img-fluid" style={{ maxWidth: '30px', height: 'auto' }} />
                {' '}
                MY FRIDGE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/fridgeGuest">Tủ lạnh của tôi</Nav.Link>
                        <Nav.Link as={Link} to="/MyFridge"> Đăng xuất</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}