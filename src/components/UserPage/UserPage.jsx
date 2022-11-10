import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import AlignItemsList from '../AlignItemsList/AlignItemsList';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const property = useSelector((store) => store.property)
  
  useEffect(() => {
    dispatch({ type: 'FETCH_PROPERTY' });
}, []);

const displayProperty = (propertyToDisplay) => {
  history.push(`/detail/${propertyToDisplay.id}`);
}
  
  return (
    <div className="container">
      <h2>Property Aqisition Management</h2>
      <h3>Welcome, {user.username}!</h3>

      <h4>Properties</h4>
      
      {/* <section className="property">
            {property.map(property => {
                return (
                    <div key={property.id} >
                        <h4>{property.address}</h4>
                        <img onClick={(event) => displayProperty(property)} src={property.photo} alt={property.address}/>
                    </div>
                );
            })}
      </section> */}

      <section className="property">
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {property.map(property => {
                return (
                  <>
                    <ListItem alignItems="flex-start" onClick={(event) => displayProperty(property)} 
                    sx={{'&:hover':{backgroundColor:'LightBlue', cursor:'pointer'}}}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={property.photo} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={property.address}
                      secondary={
                        <React.Fragment>
                          {property.other}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  </>
                );
            })}
         </List>   
      </section>

      {/* <section>
        <AlignItemsList />
      </section> */}
      
      <Link to="/add">Add Property</Link>

      <br />

      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;



