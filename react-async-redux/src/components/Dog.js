import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchDog, fetchSpecificDog } from '../actions/index';

const initialFormValue = {doggo: ''}

const Dog = (props) => {
    const { dogImage, isFetching, error, fetchDog, fetchSpecificDog } = props
    const [formValue, setFormValue] = useState(initialFormValue)

    // useEffect(() => {
    //     fetchDog()
    // }, [])

    const handleClick = () => {
        fetchDog()
    }

    const onChange = (event) => {
        const { name, value } = event.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = () => {
        fetchSpecificDog(formValue.doggo)
        setFormValue(
            initialFormValue
        )
    }

    
    if(error) {
        return <h2>ERROR: {error}</h2>
    }

    if(isFetching) {
        return <h2>⚙️ - Fetching doggo - ⚙️</h2>
    }

    return (
        <div className='Doggo'>
            <img src={dogImage}/>
            <h3>Want a random doggo?</h3>
            <button onClick={handleClick}>Get new doggo</button>
            <form onSubmit={handleSubmit}>
                <h3>Want a specific doggo?</h3>
                <label>
                    Doggo breed:&nbsp;
                    <input
                    value={formValue.value}
                    onChange={onChange}
                    name="doggo"
                    type="text"
                    />
                </label>
                <button>Get Doggo</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dogImage: state.dogImage,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, { fetchDog, fetchSpecificDog })(Dog);