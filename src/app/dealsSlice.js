import { createSlice } from '@reduxjs/toolkit';

import { getRandom, getRandomArrElement } from '../utils';

const nameInfoArr = ['Whitelist', 'Privat', 'Public'];
const statusArr = [
  'Active',
  'Archived',
  'Fundraising',
  'Preparing',
  'Completed',
];

const initialState = [
  {
    id: getRandom(),
    icon: 'gold-coin-icon.jpg',
    name: 'Presail.com',
    nameInfo: getRandomArrElement(nameInfoArr),
    status: getRandomArrElement(statusArr),
    fundAmount: 200000,
    signups: 50,
    deal: {
      raised: 160000,
      stablecoins: [
        {
          id: getRandom(),
          name: 'B-USDT',
          balance: '7500',
        },
        {
          id: getRandom(),
          name: 'BUSD',
          balance: '500',
        },
        {
          id: getRandom(),
          name: 'B-USDC',
          balance: '18750',
        },
      ],
      dateFrom: new Date().toLocaleDateString(),
      dateTo: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toLocaleDateString(),
    },
    dealSummary: {
      tokenPrice: 1,
      fee: 10,
      vesting: 10,
      minContribution: 0,
      maxContribution: 0,
      acceptedStablecoins: ['USDC', 'USDT', 'BSC-USD', 'USDC', 'BUSD'],
      acceptedNetworks: ['BEP20', 'ERC20'],
    },
  },
  {
    id: getRandom(),
    icon: 'gold-coin-icon.jpg',
    name: 'Star Atlas',
    nameInfo: getRandomArrElement(nameInfoArr),
    status: getRandomArrElement(statusArr),
    fundAmount: 80000,
    signups: 39,
    deal: {
      raised: 64000,
      stablecoins: [
        {
          id: getRandom(),
          name: 'B-USDT',
          balance: 7500,
        },
        {
          id: getRandom(),
          name: 'BUSD',
          balance: 500,
        },
        {
          id: getRandom(),
          name: 'B-USDC',
          balance: 18750,
        },
      ],
      dateFrom: new Date().toLocaleDateString(),
      dateTo: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toLocaleDateString(),
    },
    dealSummary: {
      tokenPrice: 1,
      fee: 10,
      vesting: 10,
      minContribution: 0,
      maxContribution: 5000,
      acceptedStablecoins: ['USDC', 'USDT', 'BSC-USD', 'USDC', 'BUSD'],
      acceptedNetworks: ['BEP20', 'ERC20'],
    },
  },
  {
    id: Date.now(),
    icon: 'gold-coin-icon.jpg',
    name: 'Bloktoria',
    nameInfo: getRandomArrElement(nameInfoArr),
    status: getRandomArrElement(statusArr),
    fundAmount: 0,
    signups: 0,
    deal: {
      raised: 0,
      stablecoins: [
        {
          id: Date.now(),
          name: 'B-USDT',
          balance: 7500,
        },
        {
          id: Date.now(),
          name: 'BUSD',
          balance: 500,
        },
        {
          id: Date.now(),
          name: 'B-USDC',
          balance: 18750,
        },
      ],
      dateFrom: new Date().toLocaleDateString(),
      dateTo: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toLocaleDateString(),
    },
    dealSummary: {
      tokenPrice: 1,
      fee: 10,
      vesting: 10,
      minContribution: 500,
      maxContribution: 7000,
      acceptedStablecoins: ['USDC', 'USDT', 'BSC-USD', 'USDC', 'BUSD'],
      acceptedNetworks: ['BEP20', 'ERC20'],
    },
  },
  {
    id: Date.now(),
    icon: 'gold-coin-icon.jpg',
    name: 'Subquery',
    nameInfo: getRandomArrElement(nameInfoArr),
    status: getRandomArrElement(statusArr),
    fundAmount: 250000,
    signups: 83,
    deal: {
      raised: 220000,
      stablecoins: [
        {
          id: Date.now(),
          name: 'B-USDT',
          balance: 7500,
        },
        {
          id: Date.now(),
          name: 'BUSD',
          balance: 500,
        },
        {
          id: Date.now(),
          name: 'B-USDC',
          balance: 18750,
        },
      ],
      dateFrom: new Date().toLocaleDateString(),
      dateTo: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toLocaleDateString(),
    },
    dealSummary: {
      tokenPrice: 1,
      fee: 10,
      vesting: 10,
      minContribution: 500,
      maxContribution: 10000,
      acceptedStablecoins: ['USDC', 'USDT', 'BSC-USD', 'USDC', 'BUSD'],
      acceptedNetworks: ['BEP20', 'ERC20'],
    },
  },
  {
    id: Date.now(),
    icon: 'gold-coin-icon.jpg',
    name: 'Parastate',
    nameInfo: getRandomArrElement(nameInfoArr),
    status: getRandomArrElement(statusArr),
    fundAmount: 175000,
    signups: 30,
    deal: {
      raised: 60000,
      stablecoins: [
        {
          id: Date.now(),
          name: 'B-USDT',
          balance: 7500,
        },
        {
          id: Date.now(),
          name: 'BUSD',
          balance: 500,
        },
        {
          id: Date.now(),
          name: 'B-USDC',
          balance: 18750,
        },
      ],
      dateFrom: new Date().toLocaleDateString(),
      dateTo: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toLocaleDateString(),
    },
    dealSummary: {
      tokenPrice: 1,
      fee: 10,
      vesting: 10,
      minContribution: 500,
      maxContribution: 10000,
      acceptedStablecoins: ['USDC', 'USDT', 'BSC-USD', 'USDC', 'BUSD'],
      acceptedNetworks: ['BEP20', 'ERC20'],
    },
  },
  {
    id: Date.now(),
    icon: 'gold-coin-icon.jpg',
    name: 'PAID Network',
    nameInfo: getRandomArrElement(nameInfoArr),
    status: getRandomArrElement(statusArr),
    fundAmount: 425000,
    signups: 138,
    deal: {
      raised: 64000,
      stablecoins: [
        {
          id: Date.now(),
          name: 'B-USDT',
          balance: 7500,
        },
        {
          id: Date.now(),
          name: 'BUSD',
          balance: 500,
        },
        {
          id: Date.now(),
          name: 'B-USDC',
          balance: 18750,
        },
      ],
      dateFrom: new Date().toLocaleDateString(),
      dateTo: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toLocaleDateString(),
    },
    dealSummary: {
      tokenPrice: 1,
      fee: 10,
      vesting: 10,
      minContribution: 500,
      maxContribution: 10000,
      acceptedStablecoins: ['USDC', 'USDT', 'BSC-USD', 'USDC', 'BUSD'],
      acceptedNetworks: ['BEP20', 'ERC20'],
    },
  },
];

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
});

export default dealsSlice.reducer
