import { useMemo } from 'react';

interface UseFormattedCurrencyOptions {
  locale?: string;
  currency?: string;
}

const useFormattedCurrency = (
  amount: number,
  { locale = 'en-US', currency = 'EUR' }: UseFormattedCurrencyOptions = {}
) => {
  return useMemo(() => {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      currencyDisplay: 'symbol',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    let formattedAmount = formatter.format(amount);

    formattedAmount = formattedAmount.replace(/(\p{Sc})/u, '$1 ');

    return formattedAmount.replace(/,/g, ' ');
  }, [amount, locale, currency]);
};

export default useFormattedCurrency;
