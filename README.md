# kaoyaswap-interface
An open source interface for the KaoyaSwap Protocol

- Website: [kaoyaswap.org](https://kaoyaswap.org/)
- Docs: [kaoyaswap.org/docs/](https://kaoyaswap-1.gitbook.io/kaoyaswapdoc/)
- Email: [kaoyaswap8558@gmail.com](mailto:kaoyaswap8558@gmail.com)
- Discord: [Kaoyaswap](https://discord.gg/DR4HQPrhBA)
- X : [@Kaoyaswap](https://x.com/KaoyaSwap
- Telegram: [Kaoyaswaporg](https://t.me/kaoyaswaporg)

## Accessing the Kaoyaswap Interface

To access the Kaoyaswap Interface, use an IPFS gateway link from the
[latest release](https://github.com/KaoyaSwapCom/kaoyaswap-interface/releases/latest), 
or visit [kaoyaswap.org](https://kaoyaswap.org).

## Listing a token

Please see the
[@kaoyaswap/default-token-list](https://github.com/KaoyaSwapCom/default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_CHAIN_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

## Accessing Kaoyaswap Interface

The Kaoyaswap Interface supports swapping against, and migrating or removing liquidity from Kaoyaswap. However,
if you would like to use Kaoyaswap, the Kaoyaswap interface for mainnet and testnets is accessible via IPFS gateways 
linked from the [v1.0.0 release](https://github.com/Kaoyaswap/kaoyaswap-interface/releases/tag/v1.0.0).
