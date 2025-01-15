import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

import metamaskLogo from '../../assets/img/metamask-fox.svg'
import Modal, { ModalProps } from '../ModalF'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'

import WalletCard from './components/WalletCard'

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Ethereum mainnet and testnets
})

interface WalletProviderModalProps extends ModalProps {
  onDismiss?: () => void; // onDismiss is optional
}

const WalletProviderModal: React.FC<WalletProviderModalProps> = ({ onDismiss }) => {
  const { activate, account, deactivate } = useWeb3React()

  useEffect(() => {
    if (account && onDismiss) {
      onDismiss(); // Ensure onDismiss is called only when defined
    }
  }, [account, onDismiss])

  const handleConnect = () => {
    console.log('connect');
    activate(injected)  
  }

  const handleDisconnect = () => {
    deactivate()
  }

  return (
    <Modal>
      <ModalTitle text="Select a wallet provider." />

      <ModalContent>
        <StyledWalletsWrapper>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={metamaskLogo} style={{ height: 32 }} />}
              onConnect={handleConnect}
              title="Metamask"
            />
          </StyledWalletCard>
        </StyledWalletsWrapper>
      </ModalContent>

      <ModalActions>
        <Button size="large" block onClick={onDismiss}>
          Cancel
        </Button>
        {account && (
          <Button size="large" block onClick={handleDisconnect}>
            Disconnect
          </Button>
        )}
      </ModalActions>
    </Modal>
  );
};

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 414px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(100% - ${(props) => props.theme.spacing[2]}px);
`

export default WalletProviderModal
