import Container from 'react-bootstrap/Container';
import '../components/css/Footer.css';

export default function AppFooter(){
    return(
        <Container fluid>
            <div className="footer-container">
                <div className="contact">Liên hệ: khoinghiep@hcmut.edu.vn</div>
            </div>
        </Container>
    )
}