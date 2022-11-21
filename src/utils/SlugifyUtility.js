import slugify from "slugify";

export const generateSlug = (title) => {
  const SLUG = slugify(title, {
    lower: true,
    strict: true,
  });

  return SLUG;
};
