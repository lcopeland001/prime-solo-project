import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function PropertyDetail() {
    const history = useHistory();
    const property = useSelector(store => store.selectedProperty);
    const { propertyId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_PROPERTY_DETAILS', payload: propertyId });
    }, [propertyId]);

    const deleteProperty = () => {
        confirm('Are you sure you want to delete propety?')
        if (true){
            dispatch({ type: 'DELETE_PROPERTY', payload: propertyId });
            history.push('/');
        }
    }
    
    return (
        <div>
            <h2>{property.address}</h2>
            <img src={property.photo} alt={property.address} />
            <p>{property.other}</p>
            <Link to={`/edit/${property.id}`}>Edit</Link>
            <br />
            <button onClick={deleteProperty}>Delete Property</button>
        </div>
    )
}

export default PropertyDetail;