export const contractAddresses = {
  sushi: {//kaoya token
    42: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B', // aelf sushi new one 9.9
    1: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B', // aelf sashimi
    97: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B', // aelf sashimi bsc testnet
    56: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B', // aelf sashimi bsc mainnet
  },
  // useless in heco & bsc
  sashimiBar: {
    42: '0xfaC2681cB05Ba08De504e7FDBc2186B22d868f2A', // aelf sushi new one 9.18
    1: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
    97: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
    56: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
  },
  sashimiRouter: {
    42: '0x879EAD67C92ec2bFa70fa9d157F500B7b31b64AB',
    1: '0x879EAD67C92ec2bFa70fa9d157F500B7b31b64AB',
    97: '0x879EAD67C92ec2bFa70fa9d157F500B7b31b64AB',
    56: '0x879EAD67C92ec2bFa70fa9d157F500B7b31b64AB',
  },
  bnbStaking: {
    42: '0x3a429b56de8ac171eEfA893533e675c5c2faFE06',
    1: '0x3a429b56de8ac171eEfA893533e675c5c2faFE06',
    97: '0x3a429b56de8ac171eEfA893533e675c5c2faFE06',
    56: '0x3a429b56de8ac171eEfA893533e675c5c2faFE06',
  },
  busdStaking: {
    42: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
    1: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
    97: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
    56: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
  },
  bnbAirdrop: {
    42: '0xd3e4f871705eD262e752D4c70777704cbC669e44',
    1: '0xd3e4f871705eD262e752D4c70777704cbC669e44',
    97: '0xd3e4f871705eD262e752D4c70777704cbC669e44',
    56: '0xd3e4f871705eD262e752D4c70777704cbC669e44',
  },
  busdAirdrop: {
    42: '0x723b079BB8FF50a56f6A944cd0Bd3F62B266f653',
    1: '0x723b079BB8FF50a56f6A944cd0Bd3F62B266f653',
    97: '0x723b079BB8FF50a56f6A944cd0Bd3F62B266f653',
    56: '0x723b079BB8FF50a56f6A944cd0Bd3F62B266f653',
  },
  // useless in heco & bsc
  investment: {
    42: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    1: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    97: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    56: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
  },
  masterChef: {
    42: '0x86e7455180db4C9f627A8a62a382ebEFac243fbE',
    1: '0x86e7455180db4C9f627A8a62a382ebEFac243fbE',
    97: '0x86e7455180db4C9f627A8a62a382ebEFac243fbE',
    56: '0x86e7455180db4C9f627A8a62a382ebEFac243fbE',
  },
  treasuryMasterChef: {
    42: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
    1: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
    97: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
    56: '0xA6da90612d0E436390b3DD9207113afe98dF6c76',
  },
  treasuryTeam: {
    42: '0xd7Af88838a276FC8Fd58A7E9658120cDc07D9BA2',
    1: '0xd7Af88838a276FC8Fd58A7E9658120cDc07D9BA2',
    97: '0xd7Af88838a276FC8Fd58A7E9658120cDc07D9BA2',
    56: '0xd7Af88838a276FC8Fd58A7E9658120cDc07D9BA2',
  },
  // WHT for heco, WBNB for bsc
  weth: {
    42: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    1: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
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
      42: '0x7B1dD2B83f67A969e13a08847C2704003F38067A',
      1: '0x7B1dD2B83f67A969e13a08847C2704003F38067A',
      97: '0x7B1dD2B83f67A969e13a08847C2704003F38067A',
      56: '0x7B1dD2B83f67A969e13a08847C2704003F38067A',
    },
    tokenAddresses: {
      42: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
      1: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
      97: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B', // kaoya
      56: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
    },
    name: 'Kaoya Party!',
    symbol: 'KY-BNB LP',
    tokenSymbol: 'KY',
    icon: '🍣',
  },
  // {
  //   pid: 1,
  //   lpAddresses: {
  //     42: '0x7a128817B3f432561bC47172e982a804e973d219',
  //     1: '0x7a128817B3f432561bC47172e982a804e973d219',
  //     97: '0x7a128817B3f432561bC47172e982a804e973d219',
  //     56: '0x7a128817B3f432561bC47172e982a804e973d219',
  //   },
  //   tokenAddresses: {
  //     42: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
  //     1: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
  //     97: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B', // ETH
  //     56: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
  //   },
  //   name: 'BUSD-KAOYA',
  //   symbol: 'BUSD-KAOYA KALP LP',
  //   tokenSymbol: 'KY',
  //   icon: '🍎',
  // },
];

export const supportedStaking = [
  {
    stakingAddress: {
      42: '0x1520B33F8C1bA8f0027ea5db82442EC4b9D36328',
      1: '0x1520B33F8C1bA8f0027ea5db82442EC4b9D36328',
      97: '0x1520B33F8C1bA8f0027ea5db82442EC4b9D36328',
      56: '0x1520B33F8C1bA8f0027ea5db82442EC4b9D36328',
    },
    stakeToken: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
    name: 'BNB-KY',
    symbol: 'BNB',
    stakeSymbol: 'KY',
    decimal: 18,
    icon: 'https://bscscan.com/token/images/bnbchain2_32.png',
  },
  // {
  //   stakingAddress: {
  //     42: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
  //     1: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
  //     97: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
  //     56: '0x0082712F69803405b8F2bB7cD5cf97638C57D13a',
  //   },
  //   stakeToken: '0xa8a33e365D5a03c94C3258A10Dd5d6dfE686941B',
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
