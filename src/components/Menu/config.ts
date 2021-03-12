import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '',
      },
      {
        label: 'Liquidity',
        href: '',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
     label: 'NFT (Coming Soon)',
     icon: 'NftIcon',
     href: '',
     },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'MuffinSwap',
        href: 'https://pancakeswap.info/token/0xebc46c9898f675eefef43ec410dd91edbf0006c1',
      },
      {
        label: 'CoinGecko',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
      {
        label: 'Coming Soon',
        href: '',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/muffinswap/',
      },
      {
        label: 'Telegram',
        href: '',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/muffinfi',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  },
  
  {
    label: 'Airdrop Pools (50BNB)',
    icon: 'AuditIcon',
    href: '',
  },
]

export default config
