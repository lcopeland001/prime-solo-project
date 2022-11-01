import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PropertyDetail() {
    const property = useSelector(store => store.selectedProperty);
    const { propertyId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: propertyId });
    }, [propertyId]);

    return (
        <div>
            <h1>{propertyId}</h1>
            <h3>{property.address}</h3>
            <img src={property.photo} alt={property.address} />
            <Link to={`/edit/${property.id}`}>Edit</Link>
            <p>{property.other}</p>
        </div>
    )
}

export default PropertyDetail;