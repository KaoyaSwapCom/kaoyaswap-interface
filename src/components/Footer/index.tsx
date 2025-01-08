import React from 'react'
import styled from 'styled-components'
import {
  ExternalLink
} from '../../theme'

import {getEthChainInfo} from "../../utils/getEthChainInfo"
import {contractAddresses} from "../../sushi/lib/constants"

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  width: 100%;
  height: 120px;
  padding: 24px 50px;
  color: #ffffff;
  font-size: 14px;
  background: ${props => props.theme.bg6};
  @media (min-width: 576px) {
    min-width: 80%;
  }
  @media (max-width: 576px) {
    flex-flow: row wrap;
  }
`

const StyledFooterItem = styled.div`
  width: 16.66%;
  @media (max-width: 576px) {
    width: 50%
  }
`;

const StyledLink = styled(ExternalLink)`
  color: #ffffff;
`

const {
  exploreURL,
  chainId
} = getEthChainInfo();

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`${exploreURL}/address/${contractAddresses.sushi[chainId]}#code`}
        >
          Kaoya Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`${exploreURL}/address/${contractAddresses.masterChef[chainId]}#code`}
        >
          MasterChef Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://discord.gg/DR4HQPrhBA">
          Discord
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://t.me/kaoyaswaporg">
          Telegram
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://x.com/KaoyaSwap">
          X
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://github.com/kaoya1125">
          Github
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://kaoyaswap-1.gitbook.io/kaoyaswapdoc/">
          Docs
        </StyledLink>
      </StyledFooterItem>
    </StyledFooter>
  )
}

export default Footer;
