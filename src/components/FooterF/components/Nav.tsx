import React from 'react'
import {
  Row,
  Col
} from 'antd';
import styled from 'styled-components'
import {contractAddresses} from '../../../sushi/lib/constants';
import {getEthChainInfo} from "../../../utils/getEthChainInfo";

const {
  exploreURL,
  chainId
} = getEthChainInfo();

const contractAddressesTemp = contractAddresses as {[index: string]:any};

const Nav: React.FC = () => {
    const smVal = 3;
    const xsVal = 12;
    return (
    <StyledRow gutter={18} justify="space-around">
      <Col sm={smVal} xs={xsVal}>
        <StyledLink
          target="_blank"
          href={`${exploreURL}/address/${contractAddressesTemp.sushi[chainId]}#code`}
        >
          Kaoya Contract
        </StyledLink>
      </Col>
      <Col sm={4} xs={xsVal}>
        <StyledLink
          target="_blank"
          href={`${exploreURL}/address/${contractAddressesTemp.masterChef[chainId]}#code`}
        >
          MasterChef Contract
        </StyledLink>
      </Col>
      <Col sm={smVal} xs={xsVal}>
        <StyledLink target="_blank" href="https://kaoyaswap-1.gitbook.io/kaoyaswapdoc/">
          Discord
        </StyledLink>
      </Col>
      <Col sm={smVal} xs={xsVal}>
        <StyledLink target="_blank" href="https://t.me/kaoyaswaporg">
          Telegram
        </StyledLink>
      </Col>
      <Col sm={2} xs={xsVal}>
        <StyledLink target="_blank" href="https://x.com/KaoyaSwap">
          X
        </StyledLink>
      </Col>
      <Col sm={2} xs={xsVal}>
        <StyledLink target="_blank" href="https://github.com/kaoya1125">
          Github
        </StyledLink>
      </Col>
      <Col sm={2} xs={xsVal}>
        <StyledLink target="_blank" href="https://kaoyaswap-1.gitbook.io/kaoyaswapdoc/">
          Docs
        </StyledLink>
      </Col>
      <Col sm={smVal} xs={xsVal}>
        <StyledLink target="_blank" href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-KaoyaSwap-v1.0.pdf">
          Audit Report
        </StyledLink>
      </Col>
      <Col sm={2} xs={xsVal}>
        <a href="/api/farms/getList" target="_blank" style={{color: '#FFF'}}>
          APY API
        </a>
      </Col>
    </StyledRow>
  )
}

// const StyledNav = styled.nav`
//   align-items: center;
//   display: flex;
//   flex-flow: row wrap;
// `

const StyledRow = styled(Row)`
  text-align: center;
  @media (min-width: 576px) {
    min-width: 80%;
  }
`

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.grey[200]};
  }
`

export default Nav
