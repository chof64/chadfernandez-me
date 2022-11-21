export const transformISOtoEnglish = (date) => {
  // accept ISO date string
  // return English date string
  const DATE = new Date(date);
  const ENGLISH_DATE = DATE.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return ENGLISH_DATE;
};
