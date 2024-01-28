import {Card} from 'react-bootstrap'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    //console.log("sbdjn", product.name)
  return (
     <Card className='my-2 p-2 rounded' >
        <Link to={`/product/${product._id}`}>
            <Card.Img variant="top" src={product.image} />
        </Link>
     
      <Card.Body>
         <Link to={`/product/${product._id}`}>
             <Card.Title as='div'>
              <strong> {product.name}</strong> 
             </Card.Title>
        </Link>
        <Card.Text as='h4'>
           $ {product.price}
        </Card.Text>
   
      </Card.Body>

    </Card>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    // Add more PropTypes for other properties if necessary
  }).isRequired
};

export default ProductCard