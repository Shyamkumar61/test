export const getDaysInCurrentMonth = (month) => {
  const now = new Date(); // create a new date object for the current date
  const year = now.getFullYear(); // get the current year
  //   const month = now.getMonth() + 1; // get the current month (add 1 because the month index starts at 0)
  // use the Date object to get the number of days in the current month
  //prettier-ignore
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const monthIndex = monthArray.indexOf(month) + 1;
  const daysInMonth = new Date(year, monthIndex, 0).getDate();
  return daysInMonth;
};


export const getMinWorkDays = (daysInMonth) => {
  return daysInMonth === 31 ? 25 : daysInMonth === 30 ? 24 : 22;
};

export const getMaxWorkDays = (daysInMonth) => {
  return daysInMonth === 31 ? 27 : daysInMonth === 30 ? 26 : 24;
};
export const base64Decode = (str) => {
  const base64Url = str.replace(/-/g, "+").replace(/_/g, "/");
  const base64 = decodeURIComponent(escape(atob(base64Url)));
  return JSON.parse(base64);
};
export const deserializeDate = (dateString) => {
  if (!dateString) {
    return;
  }
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // month is zero-based in JavaScript Date object
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  const m2Object = {
    $D: date.getDate(),
    $H: date.getHours(),
    $L: "en",
    $M: date.getMonth() + 1, // month is zero-based, so add 1
    $W: date.getDay(),
    $d: date,
    $m: date.getMinutes(),
    $ms: date.getMilliseconds(),
    $s: date.getSeconds(),
    $u: undefined,
    $x: {},
    $y: date.getFullYear(),
  };

  return m2Object;
};

