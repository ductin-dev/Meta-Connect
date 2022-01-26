export function jsonClassNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
