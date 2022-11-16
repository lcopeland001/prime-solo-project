import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Use History Allows us to navigate to another page
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyForm = () => {
    const history = useHistory();
    // Step 2: useSelector & useDispatch
    const property = useSelector(store => store.address); // getter
    const dispatch = useDispatch();
    
    const [address, setAddress] = useState('');
    const [photo, setPhoto] = useState('');
    const [other, setOther] = useState('');
    const { id } = useParams();
    const { user_id } = useParams();


    useEffect(() => {
        if (id) { // Return false if id is undefined
            axios.get(`/api/property/${id}`).then(response => {
                const property = response.data;
                setAddress(property.address);
                setPhoto(property.photo);
                setOther(property.other);
            }).catch(error => {
                console.log(error);
                alert('Something went wrong!');
            })
        } // else do nothing
    }, [id]);

    // Step 4: dispatch; Pass the data to our reducer
    const submitForm = (e) => {
        e.preventDefault();
        if (id) {
            dispatch({ type: 'EDIT_PROPERTY', payload: { address, photo, other, id, user_id }, history })
        } else {
            dispatch({ type: 'ADD_PROPERTY', payload: { address, photo, other }, history});
        }
    }

    const getTitle = () => {
        if (id) {
            return 'Edit Property';
        } else {
            return 'Add Property';
        }
    }

    return (
        <>
            <div className="container">
                <h1>{id ? 'Edit Property' : 'Add Property' } </h1> 
                <form onSubmit={submitForm}>
                    <p>Address: <input value={address} onChange={(e) => setAddress(e.target.value)} /></p>
                    <p>Photo: <input value={photo} onChange={(e) => setPhoto(e.target.value)}  /></p>
                    <p>Notes: <input value={other} onChange={(e) => setOther(e.target.value)}  /></p>
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}

export default PropertyForm;