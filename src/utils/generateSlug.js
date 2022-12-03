import slugify from "slugify";

export const generateSlug = (title) => {
  return slugify(title, { lower: true, strict: true });
};
