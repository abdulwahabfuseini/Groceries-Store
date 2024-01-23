const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "GHC",
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format.number;
};
