export const cacheBuster = () => Math.random().toString(36).substring(2, 15);

/**
 * Returns the difference in whole days between now and the provided date.
 * Returns `null` when the input is not a valid date.
 */
export const dateDiff = (date: string): number | null => {
  const now = new Date();
  const inputDate = new Date(date);

  if (Number.isNaN(inputDate.getTime())) {
    return null;
  }

  const diffTime = Math.abs(now.getTime() - inputDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

/**
 * Formats a date string into a human-friendly label.
 * Always returns a string; for invalid inputs it returns 'Invalid date'.
 */
export const dateFormatter = (date: string): string => {
  const publishDate = new Date(date);

  if (Number.isNaN(publishDate.getTime())) {
    return 'Invalid date';
  }

  const diffDays = dateDiff(date);
  if (diffDays === null) {
    return 'Invalid date';
  }

  if (diffDays < 1) {
    return 'Posted today';
  }
  if (diffDays === 1) {
    return 'Posted a day ago';
  }
  if (diffDays <= 7) {
    return `Posted ${diffDays} days ago`;
  }

  return publishDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
