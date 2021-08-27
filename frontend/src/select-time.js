
import { useEffect, useState } from 'react';

const DateTime = ({ name, onDateChange, onTimeChange }) => {

  return (
    <div>
      <input type="date" name={`${name}-date`} defaultValue='2021-08-23'
        onChange={e => {
          onDateChange(e.target.value)
        }} />
    </div>
  )
};

const validate = ({ date, time }) => {
  return /^\d{4,4}-(\d{2,2}-?){2,2}$/.test(date) && /^\d{2,2}:\d{2,2}$/.test(time);
};

export const SelectTime = ({ onChange }) => {

  const [from, setFrom] = useState({ });
  const [until, setUntil] = useState({ });

  const debug = JSON.stringify({ from, until });

  useEffect(() => {
    if (validate(from) && validate(until)) {
      onChange({ from, until })
    }
  }, [from, until, onChange]);

  return (
    <div>
      <pre>{debug}</pre>
      <div>from</div>
      <DateTime name="from"
        onDateChange={date => {
          setFrom({
            time: '00:00',
            date
          })
        }} />
      <div>until</div>
      <DateTime name="from"
        onDateChange={date => {
          setUntil({
            time: '23:59',
            date
          })
        }} />
    </div>
  );
}