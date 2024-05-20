import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [input, setInput] = useState([
        { id: "", name: "", contact: "" },
    ]);

    const addMore = () => {
        let newRecord = {
            id: Date.now(),
            name: "",
            contact: ""
        };
        setInput([...input, newRecord]);
        alert("Your record has been added!!");
    };

    const remove = (id) => {
        setInput(input.filter(val => val.id !== id));
        alert("Your record has been removed!!");
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Dynamic Form</h1>
            {input.map((val, index) => (
                <form key={val.id} className="form">
                    <div className="form-row">
                        <label>ID:</label>
                        <input type="text" placeholder='Enter Your ID'></input>
                    </div>
                    <div className="form-row">
                        <label>NAME:</label>
                        <input type="text" placeholder='Enter Your Name'></input>
                    </div>
                    <div className="form-row">
                        <label>CONTACT:</label>
                        <input type="text" placeholder='Enter Your Contact'></input>
                    </div>
                    {index === 0 ? null : (
                        <button className="delete-btn" type='button' onClick={() => remove(val.id)}>DELETE</button>
                    )}
                </form>
            ))}
            <button className="add-btn" onClick={addMore}>Add More</button>
        </div>
    );
};

export default Form;
