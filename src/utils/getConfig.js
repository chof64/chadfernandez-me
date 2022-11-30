export const getConfig = (key, value, config) => {
  const result = config.sections.find((item) => item[key] === value);

  return result;
};
