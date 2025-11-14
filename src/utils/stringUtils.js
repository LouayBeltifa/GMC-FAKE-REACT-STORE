function formatPrice(num) {
  return "$" + Number(num || 0).toFixed(2);
}

export { formatPrice };