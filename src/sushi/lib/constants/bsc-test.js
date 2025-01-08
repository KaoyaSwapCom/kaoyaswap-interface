export const contractAddresses = {
  sushi: {//kaoya token
    42: '0x81B4012Aacf10ca797337B7daCF208d8e00c6E9F', // aelf sushi new one 9.9
    1: '0x81B4012Aacf10ca797337B7daCF208d8e00c6E9F', // aelf sashimi
    97: '0x81B4012Aacf10ca797337B7daCF208d8e00c6E9F', // aelf sashimi bsc testnet
    56: '0x81B4012Aacf10ca797337B7daCF208d8e00c6E9F', // aelf sashimi bsc mainnet
  },
  // useless in heco & bsc
  sashimiBar: {
    42: '0xfaC2681cB05Ba08De504e7FDBc2186B22d868f2A', // aelf sushi new one 9.18
    1: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
    97: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
    56: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
  },
  sashimiRouter: {
    42: '0x2e88c282f10A40Ea37918da4B2dE665e7E67fEFb',
    1: '0x2e88c282f10A40Ea37918da4B2dE665e7E67fEFb',
    97: '0x2e88c282f10A40Ea37918da4B2dE665e7E67fEFb',
    56: '0x2e88c282f10A40Ea37918da4B2dE665e7E67fEFb',
  },
  bnbStaking: {
    42: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
    1: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
    97: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
    56: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
  },
  busdStaking: {
    42: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
    1: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
    97: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
    56: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
  },
  bnbAirdrop: {
    42: '0xd2C69124dada43E6FeaDbbb3b0B4eD46D33fbAf3',
    1: '0xd2C69124dada43E6FeaDbbb3b0B4eD46D33fbAf3',
    97: '0xd2C69124dada43E6FeaDbbb3b0B4eD46D33fbAf3',
    56: '0xd2C69124dada43E6FeaDbbb3b0B4eD46D33fbAf3',
  },
  busdAirdrop: {
    42: '0x078cCC7e308C46b3d218D37928DCEBDd4b4293B4',
    1: '0x078cCC7e308C46b3d218D37928DCEBDd4b4293B4',
    97: '0x078cCC7e308C46b3d218D37928DCEBDd4b4293B4',
    56: '0x078cCC7e308C46b3d218D37928DCEBDd4b4293B4',
  },
  // useless in heco & bsc
  investment: {
    42: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    1: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    97: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    56: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
  },
  masterChef: {
    42: '0xf8cf9854159b6277ea644418e5511e6243dc8593', // aelf sushi new one 9.9
    1: '0xf8cf9854159b6277ea644418e5511e6243dc8593', // aelf master
    97: '0xf8cf9854159b6277ea644418e5511e6243dc8593', // aelf master
    56: '0xf8cf9854159b6277ea644418e5511e6243dc8593', // aelf master
  },
  treasuryMasterChef: {
    42: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
    1: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
    97: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
    56: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
  },
  treasuryTeam: {
    42: '0x9Fe870eD3AF8Aa39c393C2f65113B9a00f8E7411',
    1: '0x9Fe870eD3AF8Aa39c393C2f65113B9a00f8E7411',
    97: '0x9Fe870eD3AF8Aa39c393C2f65113B9a00f8E7411',
    56: '0x9Fe870eD3AF8Aa39c393C2f65113B9a00f8E7411',
  },
  // WHT for heco, WBNB for bsc
  weth: {
    42: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // aelf sushi
    1: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // sushi use
    97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // sushi use
    56: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // sushi use
  },
}

export const supportedInvestmentPools = [];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [];

export const hiddenPools = [];

export const doublePools = [];
export const unStakeOnlyDoublePools = [];

const getWaitingPools = (start, end) => {
  const array = [];
  for (let i = 0; i <= end - start; i++) {
    array.push(start + i);
  }
  return array;
};
export const waitingInfo = {
  waitingPool: getWaitingPools(10, 10),
  startTime: 1619232713763
};

// 0928 Normal Farm -> KAOYA LP
export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0xc575b3cb7F0EAb2070ee7da214167FC7338F7a4e',
      1: '0xc575b3cb7F0EAb2070ee7da214167FC7338F7a4e',
      97: '0xc575b3cb7F0EAb2070ee7da214167FC7338F7a4e',
      56: '0xc575b3cb7F0EAb2070ee7da214167FC7338F7a4e',
    },
    tokenAddresses: {
      42: '0xc0EEae969404aD49F2cb13509c9167e92Bd8a230',
      1: '0xc0EEae969404aD49F2cb13509c9167e92Bd8a230',
      97: '0xc0EEae969404aD49F2cb13509c9167e92Bd8a230', // sashimi
      56: '0xc0EEae969404aD49F2cb13509c9167e92Bd8a230',
    },
    name: 'Kaoya Party!',
    symbol: 'KAOYA-BNB KALP LP',
    tokenSymbol: 'KY',
    icon: '🍣',
  },
  // {
  //   pid: 1,
  //   lpAddresses: {
  //     42: '0xE034e2f27b22e6F94b4ad98079c89180A3f2BeE1',
  //     1: '0xE034e2f27b22e6F94b4ad98079c89180A3f2BeE1',
  //     97: '0xE034e2f27b22e6F94b4ad98079c89180A3f2BeE1',
  //     56: '0xE034e2f27b22e6F94b4ad98079c89180A3f2BeE1',
  //   },
  //   tokenAddresses: {
  //     42: '0xDc25d2F8eC9C2e351C996c2a9852178e722ef441',
  //     1: '0xDc25d2F8eC9C2e351C996c2a9852178e722ef441',
  //     97: '0xDc25d2F8eC9C2e351C996c2a9852178e722ef441', // ETH
  //     56: '0xDc25d2F8eC9C2e351C996c2a9852178e722ef441',
  //   },
  //   name: 'BUSD-KAOYA',
  //   symbol: 'BUSD-KAOYA KALP LP',
  //   tokenSymbol: 'KY',
  //   icon: '🍎',
  // },
  // {
  //   pid: 2,
  //   lpAddresses: {
  //     42: '0x93A21a8Ec2A309B2873345294C7f4eAE95169a91',
  //     1: '0x93A21a8Ec2A309B2873345294C7f4eAE95169a91',
  //     97: '0x93A21a8Ec2A309B2873345294C7f4eAE95169a91',
  //     56: '0x93A21a8Ec2A309B2873345294C7f4eAE95169a91',
  //   },
  //   tokenAddresses: {
  //     42: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  //     1: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  //     97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // ETH
  //     56: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  //   },
  //   name: 'WBNB-BUSD',
  //   symbol: 'WBNB-BUSD KALP LP',
  //   tokenSymbol: 'BNB',
  //   icon: '🍌',
  // },
];

export const supportedStaking = [
  {
    stakingAddress: {
      42: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
      1: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
      97: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
      56: '0x0970229bBD1f56479946DCc767Ef32c94911e6fa',
    },
    stakeToken: '0x81B4012Aacf10ca797337B7daCF208d8e00c6E9F',
    name: 'BNB-KAOYA',
    symbol: 'BNB',
    stakeSymbol: 'KAOYA',
    decimal: 18,
    icon: 'https://bscscan.com/token/images/bnbchain2_32.png',
  },
  // {
  //   stakingAddress: {
  //     42: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
  //     1: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
  //     97: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
  //     56: '0xb9f72a39AB304D5E6a6f1ADCcA4A11Ff3C330350',
  //   },
  //   stakeToken: '0x4FfCCAb96750CF9584f70d0f5A920a9457E66FF4',
  //   name: 'BUSD-KAOYA',
  //   symbol: 'BUSD',
  //   stakeSymbol: 'KAOYA',
  //   decimal: 18,
  //   icon: 'https://bscscan.com/token/images/busd_32.png',
  // },
];
// Vault
// TODO: replace
export const vaultController = '0x3884eab512bB0475100997271EC83163DAa944AE';
export const vaults = [];

export const vaultStableTokenPriceAPI = 'http://39.98.34.153:8081/api/price';
