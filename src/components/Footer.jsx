/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core'

import {
  marketFooterStyle,
  marketFooterHeadingStyle,
  marketFooterListStyle,
  marketFooterListItemStyle,
  marketFooterLinkStyle,
  mainFooterStyle,
  mainFooterNavStyle,
  mainFooterMenuContainerStyle,
  mainFooterHeadingStyle,
  mainFooterListStyle,
  mainFooterListItemStyle,
} from '../styles/Footer.css';

const Footer = () => {
  const marketFooterLinks = {
    'Alabama': 'alabama',
    'Arizona': 'arizona',
    'Arkansas': 'arkansas',
    'California': 'california',
    'Delaware': 'delaware',
    'Florida': 'florida',
    'Georgia': 'georgia',
    'Illinois': 'illinois',
    'Indiana': 'indiana',
    'Kansas': 'kansas',
    'Kentucky': 'kentucky',
    'Michigan': 'michigan',
    'Minnesota': 'minnesota',
    'Mississippi': 'mississippi',
    'Missouri': 'missouri',
    'Nevada': 'nevada',
    'New Jersey': 'new-jersey',
    'North Carolina': 'northcarolina',
    'Ohio': 'ohio',
    'Oklahoma': 'oklahoma',
    'Pennsylvania': 'pennsylvania',
    'South Carolina': 'southcarolina',
    'Tennessee': 'tennessee',
    'Texas': 'texas',
    'Wisconsin': 'wisconsin',
  };

  return (
    <Fragment>
      <div css={marketFooterStyle}>
        <h3 css={marketFooterHeadingStyle}>Roofstock Markets</h3>

        <ul css={marketFooterListStyle}>
          {Object.keys(marketFooterLinks).map((displayValue) => {
            return (
              <li key={displayValue} css={marketFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href={`https://www.roofstock.com/investment-property-marketplace?market=${marketFooterLinks[displayValue]}`} css={marketFooterLinkStyle}>{displayValue}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <footer css={mainFooterStyle}>
        <nav css={mainFooterNavStyle}>
          <div css={mainFooterMenuContainerStyle}>
            <ul css={mainFooterListStyle}>
              <li css={mainFooterHeadingStyle}>Business</li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/investment-property-marketplace">Buy Properties</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/seller-services">Sell Properties</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/manage-properties">Manage Properties</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/agents-brokers">Agents &amp; Brokers</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/broker-licenses">Broker Licenses</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/property-management">Preferred Property Managers</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/cloudhouse">Cloudhouse Rental Calculator</a>
              </li>
            </ul>
          </div>

          <div css={mainFooterMenuContainerStyle}>
            <ul css={mainFooterListStyle}>
              <li css={mainFooterHeadingStyle}>About Us</li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/about-us">What We Do</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/about-us/#team">Our Team</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/about-us/press">Press</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://learn.roofstock.com/reviews">Reviews</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/about-us/partners">Partners</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/about-us/careers">Careers</a>
              </li>
            </ul>
          </div>

          <div css={mainFooterMenuContainerStyle}>
            <ul css={mainFooterListStyle}>
              <li css={mainFooterHeadingStyle}>Learn</li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/how-it-works">How It Works</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/portfolios/overview">Portfolio Investments</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://learn.roofstock.com/blog">Blog</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/investment-property/roofstock-coverage">Markets</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/financing">Financing</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://learn.roofstock.com/fund-partners">Fund Partners</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://learn.roofstock.com/certification-guarantee/">Certification &amp; Guarantee</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/get-neighborhood-rating">Neighborhoods</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/learn/faq">FAQ</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/learn/glossary">Glossary</a>
              </li>
            </ul>
          </div>

          <div css={mainFooterMenuContainerStyle}>
            <ul css={mainFooterListStyle}>
              <li css={mainFooterHeadingStyle}>Services</li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://join.roofstock.com/advisory-services">Advisory Services</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://join.roofstock.com/1031-exchange">1031 Exchange</a>
              </li>
              <li css={mainFooterListItemStyle}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/sdira">IRA Investing</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </Fragment>
  );
};

export default Footer;
