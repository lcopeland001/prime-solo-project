import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PropertyDetail() {
    const property = useSelector(store => store.selectedProperty);
    const { propertyId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_PROPERTY_DETAILS', payload: propertyId });
    }, [propertyId]);

    const deleteProperty = () => {
        dispatch({ type: 'DELETE_PROPERTY' });
    }

    return (
        <div>
            <h1>{property.address}</h1>
            <img src={property.photo} alt={property.address} />
            <p>{property.other}</p>
            <Link to={`/edit/${property.id}`}>Edit</Link>
            <br />
            <button onClick={deleteProperty}>Delete Property</button>
        </div>
    )
}

export default PropertyDetail;