export const getConfig = ({ key, value, config }) => {
  return config.find((item) => item[key] === value);
};
