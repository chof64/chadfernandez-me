export const dateIsoToEnglish = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
