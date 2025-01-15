import { InjectedConnector } from '@web3-react/injected-connector'
import { Web3Provider } from '@ethersproject/providers'
import { switchToArbitrum } from '../contexts/NetworkProvider/NetworkProvider';

// Create an injected connector (MetaMask)
const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42] // Supported networks, like Ethereum mainnet and testnets
})

// Function to check wallet version
const checkWalletVersion = () => {
  const ethereum = window.ethereum as any;

  if (ethereum && typeof ethereum.request === "function") {
    console.log("Wallet supports `request` method. Likely V2.");
    return "V2";
  } else {
    console.log("Wallet does not support `request`. Likely V1.");
    return "V1";
  }
};

// Function to connect wallet and check version
export const connectWallet = async () => {
  try {
    const provider = new Web3Provider(window.ethereum)
    const accounts = await provider.send('eth_requestAccounts', [])
    console.log("Connected accounts:", accounts)

    // Call checkWalletVersion after wallet is connected
    const walletVersion = checkWalletVersion();
    console.log("Wallet Version:", walletVersion)

    await switchToArbitrum()

    return { accounts, walletVersion }
  } catch (err) {
    console.error("Error connecting wallet:", err)
    return null
  }
}

// Function to check if wallet is connected
export const isWalletConnected = () => {
  return window.ethereum ? true : false
}

/*
import { InjectedConnector } from '@web3-react/injected-connector';
import { Web3Provider } from '@ethersproject/providers';
import { createCoinbaseWalletSDK } from '@coinbase/wallet-sdk';


// Injected connector (MetaMask or other browser wallets)
const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Ethereum mainnet and testnets
});

// Coinbase Wallet SDK setup
const coinbaseWalletSDK = createCoinbaseWalletSDK({
  appName: 'Koayaswap',
  jsonRpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
} as any);
const coinbaseProvider = coinbaseWalletSDK.getProvider();

export const connectCoinbaseWallet = async () => {
  try {
    const accounts = await coinbaseProvider.request({ method: 'eth_requestAccounts' });
    console.log('Connected to Coinbase Wallet:', accounts);
    return { accounts, walletType: 'coinbase' };
  } catch (err) {
    console.error('Error connecting to Coinbase Wallet:', err.message || err);
    return null;
  }
};

const connectInjectedWallet = async () => {
  try {
    if (!window.ethereum) {
      console.error('Injected wallet (e.g., MetaMask) not found.');
      return null;
    }

    const provider = new Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    console.log('Connected to Injected Wallet:', accounts);
    return { accounts, walletType: 'injected' };
  } catch (err) {
    console.error('Error connecting to Injected Wallet:', err.message || err);
    return null;
  }
};


export const connectWallet = async (walletType: 'injected' | 'coinbase') => {
  let result = { walletVersion: null };
  if (walletType === 'coinbase') {
    result.walletVersion = await connectCoinbaseWallet();
  } else {
    result.walletVersion = await connectInjectedWallet();
  }
  return result; // Return an object with walletVersion
};

export const isWalletConnected = () => {
  return !!(window.ethereum || coinbaseProvider);
};
*/
