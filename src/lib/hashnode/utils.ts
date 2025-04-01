export const cacheBuster = () => Math.random().toString(36).substring(2, 15);

export const dateFormatter = (date: string) => {
  const now = new Date();
  const publishDate = new Date(date);
  const diffTime = Math.abs(now.getTime() - publishDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    return "Posted today";
  } else if (diffDays === 1) {
    return "Posted a day ago";
  } else if (diffDays <= 7) {
    return `Posted ${diffDays} days ago`;
  } else {
    return publishDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
};
