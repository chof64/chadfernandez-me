export const getConfig = ({ key, value, config, index }) => {
  const result = config[index].find((item) => item[key] === value);

  return result;
};
