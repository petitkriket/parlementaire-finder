export const subtractYears = (numOfYears, date = new Date()) => {
  date.setFullYear(date.getFullYear() - numOfYears);
  return date;
};

export const toShortDate = (date) =>
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + date.getDate()).slice(-2);

export const getBirthDate = (age) => {
  const birthDate = subtractYears(age);
  return toShortDate(birthDate);
};

export const getNumberOfYearsFromDate = (date) => {
  const now = new Date();
  const diff = now - new Date(date);
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
};
