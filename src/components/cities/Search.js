import React, { useState } from "react";
import { DatePicker } from "react-persian-datepicker";

const styles = {
  calendarContainer: "calendarContainer",
  dayPickerContainer: "dayPickerContainer",
  monthsList: "monthsList",
  daysOfWeek: "daysOfWeek",
  dayWrapper: "dayWrapper",
  selected: "selected",
  heading: "heading"
};

const Search = ({searchCities}) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value)
    console.log({text, value:e.target.value})
  }
  const onClick = e => {
    searchCities(text);
  }
  return (
    
        <div className="mt-5 form-row align-items-center">
          <div className="col-6">
            <input
              className="text-center"
              type="text"
              name="text"
              placeholder="شهـــر"
              value={text}
              onChange={onChange}
            />
          </div>
          {/* <div className="col-2">
            <DatePicker placeholder="از تاریخ" calendarStyles={styles} />
          </div>
          <div className="col-2">
            <DatePicker placeholder="تا تاریخ" calendarStyles={styles} />
          </div> */}
          <div className="col-1">
            <button className="btn btn-primary" onClick={onClick}>
            جستجــو
            </button>
          </div>
        </div>
      
  );
};

export default Search;
