import { useForm } from 'react-hook-form';
import './Contact.css';
import { ModalDailog } from '../common/ModalDailog';
import { useState } from 'react';

export const Contact = () => {

    const form = useForm({
        mode: 'onBlur'
    });
    const [modalShow, setModalShow] = useState(false);
    const {register, formState, handleSubmit, reset} = form;
    const {errors} = formState;
    const contactFormSuccessMessage = "Your message has been sent successfully. You will received a response shortly from us on the provided email."

    const onContactFormSubmit = (data) => {
        reset();
        setModalShow(true);
    }


    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit(onContactFormSubmit)} className="contact-form" noValidate>
                <h3>Contact</h3>
                <div className="form-group">
                    <label htmlFor='fullName' className='form-label' required>Your full name</label>
                    <input type="text" className="form-control" id="fullName"
                        {...register('fullName', {
                            required: "Full name is required"
                        })}
                    />
                    {errors.fullName && <p className='contact-form-error'>{errors.fullName.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor='emailAddress' className='form-label' required>Your email address</label>
                    <input type="email" className="form-control" id="emailAddress" 
                        {...register('emailAddress', {
                            required: "Email address is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                message: 'Invalid email format'
                            }
                        })}
                    />
                    {errors.emailAddress && <p className='contact-form-error'>{errors.emailAddress.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor='subject' className='form-label' required>Your subject</label>
                    <input type="text" className="form-control" id="subject"
                        {...register('subject', {
                            required: "Subject is required",
                            minLength: {
                                value: 5,
                                message: "Message should have minimum 5 characters"
                            }
                        })}
                    />
                    {errors.subject && <p className='contact-form-error'>{errors.subject.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor='message' className='form-label' required>Your message</label>
                    <textarea className="form-control" id="message"
                        {...register('message', {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Message should have minimum 10 characters"
                            }
                        })}
                    />
                    {errors.message && <p className='contact-form-error'>{errors.message.message}</p>}
                </div>
                <button className='btn'>Send</button>
            </form>
            <ModalDailog show={modalShow} handleClose={() => {setModalShow(false)}} message={contactFormSuccessMessage} />
        </div>
    )
}