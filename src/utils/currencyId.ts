import { Currency, ETHER, Token } from '@sashimiswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return process.env.REACT_APP_CHAIN_NATIVE_TOKEN_SYMBOL as string
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
