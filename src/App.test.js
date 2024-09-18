import { render, screen } from '@testing-library/react';
import App from './App';
import { ReserveTableForm } from './components/main/ReserveTableForm';
import userEvent from '@testing-library/user-event';
import { getDateAsString } from './components/common/Utils';
import { useForm } from 'react-hook-form';
import { fetchAPI } from './components/api/Api';
import { ReserveTablePage } from './components/main/ReserveTablePage';

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const renderReserveTableForm = () => {
  const defaultBookingDate = getDateAsString(new Date());
  const availableTimes = fetchAPI(new Date());
  const mockSetAvailableTimes = jest.fn();
  const mockOnFormSubmit = jest.fn();
  render(<ReserveTableForm defaultBookingDate={defaultBookingDate} availableTimes={availableTimes} 
    setAvailableTimes={mockSetAvailableTimes} onFormSubmit={mockOnFormSubmit}/>)
}

test('Reserve table - heading displayed', () => {
  renderReserveTableForm();
  const headingElement = screen.getByText('Reserve table');
  expect(headingElement).toBeInTheDocument();
});

test('REserve table form - required fields should not be blank', async () => {
  const { user } = setup(renderReserveTableForm());
  await user.clear(screen.getByTestId("bookingDate"));
  await user.selectOptions(screen.getByTestId("bookingTime"), ['']);  //select first option from the list
  await user.clear(screen.getByTestId("numberOfGuests"));
  await user.clear(screen.getByTestId("fullName"));
  await user.clear(screen.getByTestId("emailAddress"));
  await user.click(screen.getByTestId('submitButton'));
  expect(screen.getByTestId('bookingDateError')).toBeInTheDocument();
  expect(screen.getByTestId('bookingTimeError')).toBeInTheDocument();
  expect(screen.getByTestId('numberOfGuestsError')).toBeInTheDocument();
  expect(screen.getByTestId('fullNameError')).toBeInTheDocument();
  expect(screen.getByTestId('emailAddressError')).toBeInTheDocument();
});

test('Number of Guests cannot be greater than 10', async () => {
  const { user } = setup(renderReserveTableForm());
  await user.type(screen.getByTestId('numberOfGuests'),"20");
  await user.click(screen.getByTestId('submitButton'));
  expect(screen.queryByTestId('numberOfGuestsError')).toBeInTheDocument();
});

test('Number of Guests cannot be less than 1', async () => {
  const { user } = setup(renderReserveTableForm());
  await user.clear(screen.getByTestId('numberOfGuests'));
  await user.type(screen.getByTestId('numberOfGuests'),"0");
  await user.click(screen.getByTestId('submitButton'));
  expect(screen.queryByTestId('numberOfGuestsError')).toBeInTheDocument();
});

test('Number of Guests between 1 and 10', async () => {
  const { user } = setup(renderReserveTableForm());
  await user.clear(screen.getByTestId('numberOfGuests'));
  await user.type(screen.getByTestId('numberOfGuests'),"9");
  await user.click(screen.getByTestId('submitButton'));
  expect(screen.queryByTestId('numberOfGuestsError')).not.toBeInTheDocument();
});

test('Number of Guests between 1 and 10', async () => {
  const { user } = setup(renderReserveTableForm());
  await user.clear(screen.getByTestId('numberOfGuests'));
  await user.type(screen.getByTestId('numberOfGuests'),"9");
  await user.click(screen.getByTestId('submitButton'));
  expect(screen.queryByTestId('numberOfGuestsError')).not.toBeInTheDocument();
});

test('Email address should be in valid format', async () => {
  const { user } = setup(renderReserveTableForm());
  await user.clear(screen.getByTestId('emailAddress'));
  await user.type(screen.getByTestId('emailAddress'),"test");
  await user.click(screen.getByTestId('submitButton'));
  expect(screen.queryByTestId('emailAddressError')).toBeInTheDocument();
});


test('Full name cannot be less than 2 characters', async () => {
  const { user } = setup(renderReserveTableForm());
  await user.clear(screen.getByTestId('fullName'));
  await user.type(screen.getByTestId('fullName'),"t");
  await user.click(screen.getByTestId('submitButton'));
  expect(screen.queryByTestId('fullNameError')).toBeInTheDocument();
});


test('Available time updated when booking date is changed', async () => {
  const defaultBookingDate = getDateAsString(new Date());
  const availableTimes = fetchAPI(new Date());
  const mockSetAvailableTimes = jest.fn();
  const mockOnFormSubmit = jest.fn();
  const { user } = setup(<ReserveTableForm defaultBookingDate={defaultBookingDate} availableTimes={availableTimes} setAvailableTimes={mockSetAvailableTimes} onFormSubmit={mockOnFormSubmit}/>);
  await user.clear(screen.getByTestId("bookingDate"));

  const bookingDate = new Date();
  const bookingYear = bookingDate.getFullYear().toString();
  const bookingMonth = (bookingDate.getMonth() + 1).toString();
  const bookingDay = bookingDate.getDate().toString();
  await user.type(screen.getByTestId("bookingDate"), (bookingYear + '-' + bookingMonth + '-' + bookingDay));
  expect(mockSetAvailableTimes).toHaveBeenCalled();
});