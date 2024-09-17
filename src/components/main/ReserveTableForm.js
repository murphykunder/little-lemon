import { useForm } from 'react-hook-form';
import './ReserveTableForm.css';
import { useReducer, useState } from 'react';
import { ModalDailog } from '../common/ModalDailog';
import { getDateAsString } from '../common/Utils';
import { fetchAPI, submitAPI } from '../api/Api';

const updateAvailableTimes = (state, data) => {
    state = fetchAPI(new Date(data));
    return state;
}

export const ReserveTableForm = () => {

    const form = useForm({
        mode: 'onBlur'
    });

    const currentDate = new Date();
    const [modalShow, setModalShow] = useState(false);
    const initializeTimes = fetchAPI(currentDate);
    const [availableTimes, dispatch] = useReducer(updateAvailableTimes, initializeTimes);
    const {register, formState, handleSubmit} = form;
    const {errors} = formState;
    const reserveTableSuccessMessage = "Your have successfully submitted your request. You will receive a mail shortly from the restaurant once your reservation is confirmed.";

    const onReserveTableFormSubmit = (formData) => {
        submitAPI(formData);
        setModalShow(true);
    }

    return (
        <>
            <div className='reserve-table-container'>
                <form onSubmit={handleSubmit(onReserveTableFormSubmit)} className='reserve-table-form' noValidate>
                    <h6>Booking Form</h6>
                    <div className='date-time-form-group'>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='bookingDate' required>Date</label>
                            <input className='form-control' type='date' id="bookingDate" min={getDateAsString(currentDate)} defaultValue={getDateAsString(currentDate)}
                                {...register('bookingDate', {
                                    required: 'Date is required',
                                    onChange: (e) => {
                                        dispatch(e.target.value)
                                    }
                                }
                            )}
                            />
                            {errors.bookingDate && <p className='reserve-table-form-error'>{errors.bookingDate.message}</p>}
                        </div>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='bookingTime' required>Time</label>
                            <select className="form-select" aria-label="Select Booking time" id="bookingTime" defaultValue={''} 
                                {...register('bookingTime', {
                                    required: "Time is required"
                                })}
                            >
                                <option value=''></option>

                                {
                                    availableTimes.map((time, index) => {
                                        return (
                                            <option key={index} value={time}>{time}</option>
                                        )
                                    })
                                }
                            </select>
                            {errors.bookingTime && <p className='reserve-table-form-error'>{errors.bookingTime.message}</p>}
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='numberOfGuests' required>Number of Guests</label>
                        <input className='form-control' type='number' id="numberOfGuests" min={1} max={10} defaultValue={1}
                                {...register('numberOfGuests', {
                                    required: 'Number of Guests is required',
                                    min: {
                                        value: 1,
                                        message: 'Number of Guests cannot be less than 1'
                                    },
                                    max: {
                                        value: 10,
                                        message: 'Number of Guests cannot be more than 10'
                                    }
                                })}
                        />
                        {errors.numberOfGuests && <p className='reserve-table-form-error'>{errors.numberOfGuests.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='occasion'>Occasion</label>
                        <select className="form-select" aria-label="Select Occasion" id="occasion" defaultValue={''} {...register('occasion')}>
                            <option value=''></option>
                            <option value="Birthday">Birthday</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='fullName' required>Full name</label>
                        <input className='form-control' type='text' id="fullName"
                                {...register('fullName', {
                                    required: 'Full name is required',
                                    minLength: {
                                        value: 2,
                                        message: 'Full name cannot be less than 2 characters'
                                    }
                                })}
                        />
                        {errors.fullName && <p className='reserve-table-form-error'>{errors.fullName.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='emailAddress' required>Email Address</label>
                        <input className='form-control' type='email' id="emailAddress"
                                {...register('emailAddress', {
                                    required: 'Email address is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                        message: 'Invalid email format'
                                    }
                                })}
                        />
                        {errors.emailAddress && <p className='reserve-table-form-error'>{errors.emailAddress.message}</p>}
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phoneNumber'>Phone Number</label>
                        <input className='form-control' type='text' id="phoneNumber" {...register('phoneNumber')}/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='specialRequest'>Special Request</label>
                        <textarea className='form-control' id="specialRequest" {...register('specialRequest')}/>
                    </div>
                    <div className="reserve-table-button-group">
                        <button className='btn' id="reserveTableCancelButton">Cancel</button>
                        <button className='btn' id="reserveTableSubmitButton">Reserve table</button>
                    </div>
                </form>
            </div>
            <ModalDailog show={modalShow} handleClose={() => {setModalShow(false)}} message={reserveTableSuccessMessage} />
        </>
    )
}