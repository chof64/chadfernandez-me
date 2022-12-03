export const getConfig = ({ key, value, config }) => {
  const result = config.find((item) => item[key] === value);

  return result;
};
