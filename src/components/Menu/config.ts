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
        href: 'https://swap.muffinance.org/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.muffinance.org/#/pool',
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
        href: 'https://medium.com/muffinfi/',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '',
  },
  
  {
    label: 'Claim 20 BNB',
    icon: 'AuditIcon',
    href: 'https://surveyheart.com/form/604c366d536a73312359d895',
  },
]

export default config
