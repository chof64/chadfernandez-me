export const transformIsoToEnglish = (date) => {
  const DATE = new Date(date);
  return DATE.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
