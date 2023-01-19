import { authenticate } from "./authenticate";

export const getSettings = async () => {
  const api = authenticate();
  return await api.settings.browse();
};
