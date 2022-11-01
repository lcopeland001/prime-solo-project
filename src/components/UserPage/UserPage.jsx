import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const property = useSelector((store) => store.property)
  
  useEffect(() => {
    dispatch({ type: 'GET_PROPERTY' });
}, []);

const displayProperty = (propertyToDisplay) => {
  history.push(`/detail/${propertyToDisplay.id}`);
}
  
  return (
    <div className="container">
      <h2>Property Aqisition Management</h2>
      <h3>Welcome, {user.username}!</h3>

      <h4>Properties</h4>
      
      <section className="property">
            {property.map(property => {
                return (
                    <div key={property.id} >
                        <h4>{property.address}</h4>
                        <img onClick={(event) => displayProperty(property)} src={property.photo} alt={property.address}/>
                    </div>
                );
            })}
      </section>
      
      <Link to="/add">Add Property</Link>

      <br />

      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;



