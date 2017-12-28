import React from 'react';

export function formatPickerDate(date) {
  const d = new Date(date);
  const day = (d.getDate() < 10) ? `0${d.getDate()}` : d.getDate();
  const month = (d.getMonth() < 9) ? `0${d.getMonth()+1}` : d.getMonth()+1;
  return `${d.getFullYear()}-${month}-${day}`;
}

export function formatEventDate(date) {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const d = new Date(date);
  const day = d.getDate();
  const month = months[d.getMonth()].toUpperCase();
  const year = d.getFullYear();
  return (
    <div className="col s2 center-align">
      <p className="margin">{month}</p>
      <h4 className="small">{day}</h4>
      <p className="small">{year}</p>
    </div>
  )
}
