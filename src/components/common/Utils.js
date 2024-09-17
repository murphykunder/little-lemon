export const getCurrentDate = () => {
    return new Date();
}

export const getDateAsString = (date) => {

    const currentDay = date.getDate().toString();
    let currentMonth = (date.getMonth()+1).toString();
    currentMonth = (currentMonth.length < 2) ? ("0" + currentMonth) : currentMonth;
    const currentYear = date.getFullYear().toString();
    return currentYear + '-' + currentMonth + '-' + currentDay;
}