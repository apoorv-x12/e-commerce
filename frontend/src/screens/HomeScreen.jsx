import {Row,Col} from 'react-bootstrap'
import products from '../products'
import ProductCard from '../components/ProductCard'
const HomeScreen = () => {
  return (
    <>
    <h1 className='text-center'>Latest Products</h1>
    <Row className='my-3'>
    {
    products.map((product) =>
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product}/>
            </Col>
    )
    }
    </Row>
   

    </>
  )
}

export default HomeScreen