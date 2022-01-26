export const trimText = (x: any, max: number) => {
  if (x?.length > max) return x.substring(0, max) + "...";
  else return x;
};
