/**
 *
 * @param {number} yyyy
 * @param {number} mm
 * @param {number} dd
 * @param {number} hh
 * @param {number} MM
 * @param {number} ss
 * @returns UTC Date
 */
module.exports.newUTCDate = (yyyy, mm, dd, hh, MM, ss = 0) => {
  const d = new Date();
  d.setUTCFullYear(yyyy);
  d.setUTCMonth(mm - 1);
  d.setUTCDate(dd);
  d.setUTCHours(hh);
  d.setUTCMinutes(MM);
  d.setUTCSeconds(ss);
  return d;
};

/**
 * timestamp
 * @param {Date} date
 * @returns postgresql compatible timestamp representation
 */
module.exports.timestamp = (date) => {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const hh = String(date.getUTCHours()).padStart(2, "0");
  const MM = String(date.getUTCMinutes()).padStart(2, "0");
  const ss = String(date.getUTCSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${MM}:${ss}`;
};

/**
 * parseUTC
 * @param {string} utcStr
 * @returns array of numbers to fit in Date constructor
 */
module.exports.parseUtc = (utcStr) => {
  const [date, time] = utcStr.split(' ');
  return date.split('-').map(n => Number.parseInt(n)).concat(
    time.split(':').map(n => Number.parseInt(n))
  );
};