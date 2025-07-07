export function getCurrencySymbol(currency: string): string {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    default:
      return '$'; // Default to USD if currency is not recognized
  }
}
