import { authenticate } from "./authenticate";

export const getSettings = async () => {
  const api = authenticate();
  const settings = await api.settings.browse();
  settings.url = settings.url.replace(/http:\/\//g, "https://");
  settings.url = settings.url.replace(/\/$/, "");
  return settings;
};
