
const isLeapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return true;
};

function daysInMonth(year, month) {
  const monthWiseDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  if (month !== 2 || !isLeapYear(year)) {
    return monthWiseDays[month];
  }
  return monthWiseDays[month] + 1;
}

export {
  daysInMonth,
};
