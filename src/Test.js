import React, { useState } from 'react';

const Test = () => {
    // Sets value of selected variable
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    // Function to change values based on dropdown selection
    const changeSelectOptionHandler = (e) => {
        setSelected(e.target.value);
    };

    // Different years
    const year = ['2020', '2021', '2022', '2023'];
    const trimmedMonth = ['June', 'July', 'August', 'September', 'October', 'November', 'December']
    const fullMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const thirtyOneDays = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    const thirtyDays = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
    const twentyEightDays = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];

    // Set variable type for year
    let yearType = null;

    // Set variable type for month
    let monthType = null;

    // Set variable type for day
    let dayType = null;

    // Set type variable based on dropdown selection
    if (selectedYear === '2020') {
        monthType = trimmedMonth;
    } else {
        monthType = fullMonth;
    };

    // Set day variable based on month selection
    if (selectedMonth === 'February') {
        dayType = twentyEightDays;
    } else if (selectedMonth === 'April' || 'June' || 'September' || 'November') {
        dayType = thirtyDays;
    } else {
        dayType = thirtyOneDays;
    };

    /** If "Type" is null or undefined then options will be null,
    * otherwise it will create a options iterable based on our array
    */

    if (monthType) {
        options = monthType.map((month) => <option key = {month}>{month}</option>);
    }

    if (dayType) {
        options = dayType.map((day) => <option key = {day}>{day}</option>);
    }

  return (
    <div
        style = {{
            padding: '16px',
            margin: '16px'
        }}
    >
        <form>
            <div>
                {/* bind changeSelectOptionHandler to onChahge method of a select element.
                This will trigger every time an option is selected */}
                <select onChange = {changeSelectOptionHandler}>
                    
                </select>
            </div>
        </form>
        
    </div>
  )
}

export default Test