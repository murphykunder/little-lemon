import { useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from '../api/Api';
import { getDateAsString } from '../common/Utils';
import { ReserveTableForm } from './ReserveTableForm';
import './ReserveTablePage.css';
import { ModalDailog } from '../common/ModalDailog';
import { useForm } from 'react-hook-form';

const updateAvailableTimes = (state, data) => {
    state = fetchAPI(new Date(data));
    return state;
}

export const ReserveTablePage = () => {

    const currentDate = new Date();
    const initializeTimes = fetchAPI(currentDate);
    const defaultBookingDate = getDateAsString(currentDate);
    const [availableTimes, setAvailableTimes] = useReducer(updateAvailableTimes, initializeTimes);
    const [modalShow, setModalShow] = useState(false);
    const reserveTableSuccessMessage = "Your have successfully submitted your request. You will receive a mail shortly from the restaurant once your reservation is confirmed.";

    const form = useForm({
        mode: 'onBlur'
    });
    const {register, formState, handleSubmit, reset} = form;
    const {errors} = formState;

    const onFormSubmit = (formData) => {
        submitAPI(formData);
        setModalShow(true);
    }

    const handleModalClose = () => {
        setModalShow(false)
        reset();
    }
    return (
        <>
            <ReserveTableForm defaultBookingDate={defaultBookingDate} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}
                onFormSubmit={onFormSubmit} register={register} errors={errors} handleSubmit={handleSubmit}
            />
            <ModalDailog show={modalShow} handleClose={handleModalClose} message={reserveTableSuccessMessage} />
        </>
    )
}