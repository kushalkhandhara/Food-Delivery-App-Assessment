// import React from 'react'
import "./Card.css";
import { Col,Card} from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Card1(props) {

    const navigate = useNavigate();

    const handleViewMenu = (menu, restaurantName,address) => {
      navigate('/menu', { state: { menu, restaurantName,address } }); // Pass menu and restaurant name as state
    };


  return (
    <Col sm={6} lg={4} xl={3} className='mb-4'>

    <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
            <Card.Img variant="top" src={props.image} />
        </div>
        <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='item_rating'>{props.renderRatingIcons(props.rating)}</div>
            </div>


            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.para}
            </Card.Text>

            <div className='d-flex align-items-center justify-content-between'>
                {/* <div className='menu_price'>
                    <h5 className='mb-0'>{props.price} $</h5>
                </div> */}
                <div className='add_to_cart'>
                    <button onClick={() => handleViewMenu(props.menu, props.title,props.para)}>
                      View Menu
                    </button>
                </div>
            </div>
        </Card.Body>
    </Card>
    </Col>
  )
}
