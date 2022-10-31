// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Use History Allows us to navigate to another page

const PropertyForm = () => {
    const history = useHistory(); // useHistory
    // Step 2: useSelector & useDispatch
    const property = useSelector(store => store.address); // getter
    const dispatch = useDispatch();

    // Step 4: dispatch; Pass the data to our reducer
    const handleChange = (event) => {
        dispatch({ type: 'SET_PROPERTY', payload: event.target.value});
    }

    // Form Validation
    const nextStep = () => {
        if (property !== undefined && property.length > 0) {
            history.push('/home');
        } else {
            alert ('Property Name is required.')
        }
    }

    const addProperty = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_PLANT', payload: newProperty });
        //updates the next plant to have a new id
        setPlant({id:newPlant.id + 1, name: ''});
    }

    return (
        <>
           
            <h3>Property Form</h3>
            <div>
                {/* Step 3: getter & setter */}
                <input value={property} onChange={handleChange} className="input" type="text" />
                <input value={property} onChange={handleChange} className="input" type="text" />
                <input value={property} onChange={handleChange} className="input" type="text" />
                <button onClick={nextStep} className="button">Submit</button>
            </div>
        </>
    );
}

export default PropertyForm;