import React, { useState } from 'react';
import "./App.css";

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        props.postNewSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height:""
        });
    };

    const handleChanges = e => {
       setNewSmurf({ 
           ...newSmurf, 
           [e.target.name]: e.target.value 
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChanges}
                    value={newSmurf.name} />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={handleChanges}
                    value={newSmurf.age} />
                <input
                    type="text"
                    name="height"
                    placeholder="Height"
                    onChange={handleChanges}
                    value={newSmurf.height}
                />
                <button className = "submitButton" type="submit">Create Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm;