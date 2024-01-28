import {Card} from 'react-bootstrap'
import PropTypes from 'prop-types';

const ProductCard = ({product}) => {
    //console.log("sbdjn", product.name)
  return (
     <Card className='my-2 p-2 rounded' >
        <a href={`/product/${product._id}`}>
            <Card.Img variant="top" src={product.image} />
        </a>
     
      <Card.Body>
         <a href={`/product/${product._id}`}>
             <Card.Title as='div'>
              <strong> {product.name}</strong> 
             </Card.Title>
        </a>
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