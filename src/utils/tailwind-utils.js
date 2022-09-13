export function classMerge(...classes) {
  return classes.filter(Boolean).join(" ");
}
