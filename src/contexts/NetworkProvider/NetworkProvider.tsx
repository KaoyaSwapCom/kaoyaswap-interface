import React, { createContext, useEffect, useState } from 'react';
import { connectWallet } from '../../utils/wallet';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

export interface NetworkContext {
  networkCorrect?: boolean;
}

export const Context = createContext<NetworkContext>({
  networkCorrect: undefined,
});

const CONTRACTS = {
  swapRouter: '0xF14772CEeb34D78e1025b6d8E7E262C837246bEd',
  factory: '0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9',
  kaoyaToken: '0x79e632EcBadE1f013Bb86c464516537176acC8E7',
  masterchef: '0x0dA603a6c96412e4FA5cD605baef7728bc7546D7',
  staking: '0x24c6626DF5AF2190194D9F011161B0448a4F0687',
  treasuryMasterchef: '0x5d97a9177ad5c192a5cac1A376f7D1a0bb973152',
  treasuryTeam: '0x74B52CD93a164692b21BA729220Dfac1d49fA299',
  WETH: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  pancakeV2Pool: '0xE08AdDb029Dd2142901108507B8B49F3CC76a5A6',
  treasuryFee: '0x218dBfC7b593D225C1513d4968d8F158C85C6913',
  treasuryStaking: '0x05E81C1978A0111deb1cFA5e6Ed1bc6C55D8090D',
};

export const switchToArbitrum = async () => {
  try {
    console.log("Attempting to connect to Web3...");
    const web3Modal = new Web3Modal({
      network: "arbitrum",
      cacheProvider: true,
    });

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    console.log("Web3 connection established");

    // Switch to Arbitrum
    await provider.send("wallet_switchEthereumChain", [{
      chainId: "0xa4b1" // Arbitrum chainId
    }]);

    console.log("Successfully switched to Arbitrum network");

    // Get signer from provider to access getAddress()
    const signer = provider.getSigner();

    // Example: Interact with KaoyaToken contract
    const kaoyaContract = new ethers.Contract(
      CONTRACTS.kaoyaToken,
      [
        "function balanceOf(address) view returns (uint)",
        "function transfer(address to, uint amount) returns (bool)"
      ],
      signer // Use signer here
    );

    // Get address from signer
    const address = await signer.getAddress();

    console.log("User Address:", address);

    // Get balance example
    const balance = await kaoyaContract.balanceOf(address);
    console.log("Balance:", ethers.utils.formatEther(balance));

  } catch (error) {
    console.error("Error:", error);
    if (error.code === 4902) {
      // Arbitrum network nahi hai to add karein
      console.log("Arbitrum network not found, attempting to add...");

      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0xa4b1',
            chainName: 'Arbitrum One',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'ETH',
              decimals: 18
            },
            rpcUrls: ['https://arb1.arbitrum.io/rpc'],
            blockExplorerUrls: ['https://arbiscan.io/']
          }]
        });

        console.log("Arbitrum network successfully added!");

      } catch (addError) {
        console.error("Error adding Arbitrum:", addError);
      }
    }
  }
};

  // const stakeTokens = async (amount: any) => {
  //   if (!signer) return;

  //   const stakingContract = new ethers.Contract(
  //     CONTRACTS.staking,
  //     ["function stake(uint256 amount)"],
  //     signer
  //   );

  //   try {
  //     const tx = await stakingContract.stake(
  //       ethers.utils.parseEther(amount)
  //     );
  //     await tx.wait();
  //     console.log("Staking successful!");
  //   } catch (error) {
  //     console.error("Staking error:", error);
  //   }
  // };

// const arbitrumChainId = '0xA4B1'; // Arbitrum One Chain ID in hex

// try {
//   // Request to switch to Arbitrum network
//   await window.ethereum.request({
//     method: 'wallet_switchEthereumChain',
//     params: [{ chainId: arbitrumChainId }],
//   });
//   console.log('Switched to Arbitrum One');
// } catch (error) {
//   if (error.code === 4902) {
//     // Add Arbitrum network if not available in wallet
//     try {
//       await window.ethereum.request({
//         method: 'wallet_addEthereumChain',
//         params: [{
//           chainId: arbitrumChainId,
//           chainName: 'Arbitrum One',
//           rpcUrls: ['https://arb1.arbitrum.io/rpc'],
//           nativeCurrency: {
//             name: 'Ethereum',
//             symbol: 'ETH',
//             decimals: 18,
//           },
//           blockExplorerUrls: ['https://arbiscan.io/'],
//         }],
//       });
//       console.log('Arbitrum One added and switched!');
//     } catch (addError) {
//       console.error('Failed to add Arbitrum:', addError);
//     }
//   } else {
//     console.error('Failed to switch network:', error);
//   }
// }

// Example: Function to interact with Staking contract



// eslint-disable-next-line react/prop-types
const NetworkProvider: React.FC = ({ children }) => {
  const [networkCorrect, setNetworkCorrect] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkNetwork = async () => {
      try {
        // Connect wallet and get walletVersion
        const result = await connectWallet(); // Assuming 'injected' as default for now
        const walletVersion = result.walletVersion;
        // Set networkCorrect based on walletVersion or connection status
        setNetworkCorrect(walletVersion === 'V2'); // You may change this condition based on your requirement
      } catch (error) {
        console.error("Error in NetworkProvider:", error);
        setNetworkCorrect(false); // Set to false if connection fails
      }
    };

    checkNetwork();
  }, []);

  return <Context.Provider value={{ networkCorrect }}>{children}</Context.Provider>;
};

export default NetworkProvider;
