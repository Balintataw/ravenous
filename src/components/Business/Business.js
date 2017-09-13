import React from 'react';
import './Business.css';

const business  = { //js object
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

class Business extends React.Component {
  render() {
    return (//Replace relevant information w/references to properties in business object (i.e. {business.thisProperty}).
      <div className="Business">
        <div className="Business-information">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>MarginOtto Pizzeria</h2>
        <div className="Business-information">
          <div className="{business.address}">
            <p>1010 Paddington Way</p>
            <p>Bordertown</p>
            <p>NY 10101</p>
          </div>
          <div className="{business.category}">
            <h3>ITALIAN</h3>
            <h3 className="{business.rating}">4.5 stars}</h3>
            <p>90 reviews</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Business;
