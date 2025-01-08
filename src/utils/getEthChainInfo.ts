const CHAIN_ENV: string = process.env.REACT_APP_CHAIN_ENV || 'bsc-test';

interface CHAIN_INFO {
  chainId: number
  rpcUrl: string
  ethscanType: string
  exploreURL: string
  chainName: string
  nativeCurrency: object
  rpcUrls: Array<string>
  blockExplorerUrls: Array<string>
  iconUrls: Array<string>
}

const CHAIN_ENV_MAP: any = {
  main: {
    chainId: 1,
    rpcUrl: 'https://mainnet.eth.aragon.network/',
    ethscanType: '',
    exploreURL: 'https://etherscan.io'
  },
  'online-test': {
    chainId: 1,
    rpcUrl: 'https://mainnet.eth.aragon.network/',
    ethscanType: '',
    exploreURL: 'https://etherscan.io'
  },
  'heco-test': {
    chainId: 256,
    rpcUrl: 'https://http-testnet.hecochain.com',
    ethscanType: '',
    exploreURL: 'https://scan-testnet.hecochain.com'
  },
  heco: {
    chainId: 128,
    rpcUrl: 'https://http-mainnet.hecochain.com',
    ethscanType: '',
    exploreURL: 'https://scan.hecochain.com'
  },
  kovan: {
    chainId: 42,
    rpcUrl: 'https://kovan.infura.io/',
    ethscanType: 'kovan.',
    exploreURL: 'https://kovan.etherscan.io'
  },
  'bsc-test': {
    chainId: 97,
    rpcUrl: 'https://data-seed-prebsc-1-s2.binance.org:8545',
    ethscanType: '',
    exploreURL: 'https://testnet.bscscan.com',

    //add
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'tBNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
    iconUrls: ['https://etherscan.io/token/images/bnb_28_2.png']
  },
  bsc: {
    chainId: 56,
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    ethscanType: '',
    exploreURL: 'https://bscscan.com',

    //add
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    /**
     * fix network details for this Chain ID do not match metamask records.
     * use https://chainid.network/chains.json recorded
     */
    rpcUrls: [
      'https://bsc-dataseed.binance.org/',
      'https://bsc-dataseed1.binance.org/',
    ],
    blockExplorerUrls: ['https://bscscan.com/'],
    iconUrls: ['https://etherscan.io/token/images/bnb_28_2.png'],
  },
};

export function getEthChainInfo(): CHAIN_INFO {
  return CHAIN_ENV_MAP[CHAIN_ENV];
}
