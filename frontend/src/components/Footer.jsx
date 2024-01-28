import {Row,Col} from 'react-bootstrap'
import {FaShopify} from "react-icons/fa";

const Footer = () => {

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
  return (
    <footer>
       
            <Row>
                <Col className='py-2 text-center bg-dark text-white'>
                   Apoorv Shrivastava <FaShopify/> Ecom App &copy; in {currentYear}
                </Col>
            </Row>
       
    </footer>
  )
}

export default Footer