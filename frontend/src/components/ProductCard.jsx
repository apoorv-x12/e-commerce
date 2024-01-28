import {Card} from 'react-bootstrap'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'
import RatingStar from './RatingStar';

const ProductCard = ({product}) => {
    //console.log("sbdjn", product.name)
  return (
     <Card className='my-2 p-2 rounded' >
        <Link to={`/product/${product._id}`}>
            <Card.Img variant="top" src={product.image} />
        </Link>
     
      <Card.Body>
         <Link to={`/product/${product._id}`} className='card-title'>
             <Card.Title as='div' >
              <strong> {product.name}</strong> 
             </Card.Title>
        </Link>

       <Card.Text as='div'>
           <RatingStar rating={product.rating} reviews={product.numReviews} id={product._id}/>
        </Card.Text>

        <Card.Text as='h4' className='py-3'>
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
    rating: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
    // Add more PropTypes for other properties if necessary
  }).isRequired
};

export default ProductCard