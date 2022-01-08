const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function toPrice(value: number) {
  return priceFormatter.format(value);
}
