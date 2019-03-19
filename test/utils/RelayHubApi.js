module.exports = [
  {
    constant: true,
    inputs: [{ name: 'relayaddr', type: 'address' }],
    name: 'ownerOf',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'relayaddr', type: 'address' }],
    name: 'stakeOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'target', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'encoded_function', type: 'bytes' },
      { name: 'transaction_fee', type: 'uint256' },
      { name: 'gas_price', type: 'uint256' },
      { name: 'gas_limit', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'sig', type: 'bytes' }
    ],
    name: 'relay',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: 'target', type: 'address' }],
    name: 'depositFor',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'relayaddr', type: 'address' },
      { name: 'unstake_delay', type: 'uint256' }
    ],
    name: 'stake',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'from', type: 'address' }],
    name: 'get_nonce',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'relay', type: 'address' },
      { indexed: false, name: 'stake', type: 'uint256' }
    ],
    name: 'Staked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'relay', type: 'address' },
      { indexed: false, name: 'stake', type: 'uint256' }
    ],
    name: 'Unstaked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'relay', type: 'address' },
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: false, name: 'transactionFee', type: 'uint256' },
      { indexed: false, name: 'stake', type: 'uint256' },
      { indexed: false, name: 'unstakeDelay', type: 'uint256' },
      { indexed: false, name: 'url', type: 'string' }
    ],
    name: 'RelayAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'relay', type: 'address' },
      { indexed: false, name: 'unstake_time', type: 'uint256' }
    ],
    name: 'RelayRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'relay', type: 'address' },
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'target', type: 'address' },
      { indexed: false, name: 'hash', type: 'bytes32' },
      { indexed: false, name: 'success', type: 'bool' },
      { indexed: false, name: 'charge', type: 'uint256' }
    ],
    name: 'TransactionRelayed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'src', type: 'address' },
      { indexed: false, name: 'amount', type: 'uint256' }
    ],
    name: 'Deposited',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'dest', type: 'address' },
      { indexed: false, name: 'amount', type: 'uint256' }
    ],
    name: 'Withdrawn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'relay', type: 'address' },
      { indexed: false, name: 'sender', type: 'address' },
      { indexed: false, name: 'amount', type: 'uint256' }
    ],
    name: 'Penalized',
    type: 'event'
  }
];
