import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';
import { format } from 'date-fns';

const PickDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  return (
    <div className="container date-picker position-relative m-3">
      <div onClick={toggleDatePicker} style={{ cursor: 'pointer' }}>
        <span className="me-2 journal-date p-3">
          {format(selectedDate, 'dd.MM.yyyy')}
        </span>
        <FaCalendar />
      </div>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={date => {
            setSelectedDate(date);
            setShowDatePicker(false);
          }}
          dateFormat="dd/MM/yyyy"
          className="position-absolute top-100 start-0"
        />
      )}
    </div>
  );
};

export default PickDate;
