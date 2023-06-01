export const Ellipsis = (nb: number, str: string) => {
  return str.length > nb ? str.slice(0, nb) + '...' : str;
};
