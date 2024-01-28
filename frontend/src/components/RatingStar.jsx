import PropTypes from "prop-types";
import { FaStar ,FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
  
const RatingStar = ({rating,reviews,id}) => {

const starLogic=(num)=>{
const stars=[];
console.log('num',num)
const integerPart = Math.floor(num);
console.log('ssss',integerPart);
const decimalPart = num % 1;
const total=5;
const fullStars=integerPart;
const halfStars=decimalPart===0?0:1;
const emptyStars=total-halfStars-fullStars;
console.log(fullStars,halfStars,emptyStars)
for (let i=0; i<fullStars;i++) {
    stars.push('f') 
}
for (let i=0; i<halfStars;i++) {
    stars.push('h')
}
for (let i=0; i<emptyStars;i++) {
    stars.push('e')
}
return stars
}

  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <div className="py-2 pb-1">{rating}</div>
        <div className="py-2" >
            {
              starLogic(rating).map((star) => 
                star==='f'?
                <FaStar color="gold" key={id}/>
                :star==='h'?<FaStarHalfAlt color="gold" key={id}/>
                :<FaRegStar color="gold" key={id}/>
                )
            } 
        </div>
        <div className="py-2 pb-1 ms-auto" style={{fontSize:'0.8rem'}} >
        <strong>{reviews} reviews</strong> 
        </div>
      </Stack>
    
    </>
  )
}

RatingStar.propTypes = {
     rating: PropTypes.number.isRequired,
     reviews: PropTypes.number.isRequired,
     id: PropTypes.string.isRequired,
}

export default RatingStar