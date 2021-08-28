
import './App.css';
import { useEffect, useState } from 'react';
import { SelectTime } from './select-time';
import XMLViewer from 'react-xml-viewer'

const validateDates = (dates) => {
  const dateRe = /^\d{4,4}-\d{2,2}-\d{2,2}$/;
  const timeRe = /^(\d{2,2}:?)+$/;
  return dateRe.test(dates.from.date) &&
    timeRe.test(dates.from.time) &&
    dateRe.test(dates.until.date) &&
    timeRe.test(dates.until.time);
};

const createUrl = (dates,train_id) => {
  return `/messages?from=${dates.from.date} ${dates.from.time}&until=${dates.until.date} ${dates.until.time}`;
}

const Header = ({trainId, length}) => {
  if (trainId) {
    return <h3>
      Messages for #{trainId} ({length} records)
    </h3>
  }
  return <h3>No messages</h3>
};

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }
  return <div style={{
    color: 'red', margin: '10pt 0'
  }}>{error}</div>
};

function App() {

  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [trainId, setTrainId] = useState('');
  const [country, setCountry] = useState('NO');
  const [rdy, setRdy] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (/^\/messages/.test(url) && rdy) {
      const _url = `${url}&train_id=${trainId}&country=${country}`
      fetch(_url).then(r => {
        if (r.status >= 400) {
          setError(`${r.status} ${r.statusText}`);
        }
        if (r.status === 200) {
          setError(null);
          return r.json();
        }
        return [];
      }).then(msgs => {
        setMessages(msgs);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [url, trainId, rdy, country]);

  const handleDateChange = dates => {
    if (validateDates(dates)) {
      setUrl(createUrl(dates));
    }
  };

  return (
    <div className="app">
      <h3>Filter</h3>
      <ErrorMessage error={error} />
      <SelectTime onChange={handleDateChange} />
      <div className="field">
        <label>Train Id</label>
        <input type="text" value={trainId} onChange={e => {
          setTrainId(e.target.value)
        }} onFocus={e => {
          setRdy(false);
        }} onBlur={e => {
          if(/^\d+$/.test(trainId)) {
            setRdy(true)
          } else {
            setRdy(false)
          }
        }} />
      </div>
      <div className="field">
        <label>Country</label>
        <select
          selected={country}
          onChange={e => setCountry(e.target.value)}
        >
          <option value="NO">NO</option>
          <option value="SE">SE</option>
        </select>
      </div>
      <Header trainId={trainId} length={messages.length} />
      <div className='train'>
        <div className='head'>Train id</div>
        <div className='head'>Country</div>
        <div className='head'>Nominal date</div>
        <div className='head'>Timestamp</div>
      </div>
      {messages.map(message => {
        return (
          <div key={message.timestamp} className='train record'>
            <div className='attr'>{message.train_id}</div>
            <div className='attr'>{message.country}</div>
            <div className='attr'>
              {new Date(Date.parse(message.nominal_date)).toLocaleDateString()}
            </div>
            <div className='attr'>
              {new Date(Date.parse(message.timestamp)).toLocaleString()}
            </div>
            <div className='message'>
              <XMLViewer xml={message.message} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
