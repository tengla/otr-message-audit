
import './App.css';
import { useEffect, useState } from 'react';
import { SelectTime } from './select-time';

const validateDates = (dates) => {
  const dateRe = /^\d{4,4}-\d{2,2}-\d{2,2}$/;
  const timeRe = /^(\d{2,2}:?)+$/;
  return dateRe.test(dates.from.date) &&
    timeRe.test(dates.from.time) &&
    dateRe.test(dates.until.date) &&
    timeRe.test(dates.until.time);
};

const createUrl = dates => `/messages?from=${dates.from.date} ${dates.from.time}&until=${dates.until.date} ${dates.until.time}`;

function App() {

  const [messages,setMessages] = useState([]);

  const [url, setUrl] = useState('');

  useEffect(() => {
    if (/^\/messages/.test(url)) {
      fetch(url).then(r => r.json()).then(msgs => {
        console.log(msgs);
        setMessages(msgs);
      })
    }
  }, [url]);

  const handleChange = dates => {
    if (validateDates(dates)) {
      setUrl(createUrl(dates));
    }
  };

  return (
    <div className="app">
      <SelectTime onChange={handleChange} />
      <h1>Messages</h1>
      <div className='train'>
        <div className='head'>Train id</div>
        <div className='head'>Country</div>
        <div className='head'>Nominal date</div>
        <div className='head'>Timestamp</div>
      </div>
      {messages.map(message => {
        return (
          <div key={message.timestamp} className='train'>
            <div className='attr'>{message.train_id}</div>
            <div className='attr'>{message.country}</div>
            <div className='attr'>{message.nominal_date}</div>
            <div className='attr'>{message.timestamp}</div>
            <div className='head'>Message</div>
            <div className='message'>{message.message}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
