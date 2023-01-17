import { authenticate } from "./authenticate";
// import GhostContentAPI from "@tryghost/content-api";

export const getSettings = async () => {
  const api = authenticate();
  return await api.settings.browse().catch((err) => {
    console.error(err);
  });
};
