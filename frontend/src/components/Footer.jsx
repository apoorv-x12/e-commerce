import {Row,Col,Container} from 'react-bootstrap'

const Footer = () => {

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
  return (
    <footer>
       <Container>
            <Row>
                <Col className='py-2 text-center bg-light'>
                   Apoorv &copy; in {currentYear}
                </Col>
            </Row>
       </Container>
    </footer>
  )
}

export default Footer