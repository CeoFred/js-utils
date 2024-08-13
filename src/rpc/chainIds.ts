import {
  mainnet,
  arbitrumGoerli,
  arbitrumSepolia,
  avalancheFuji,
  bsc,
  fantomTestnet,
  harmonyOne,
  optimismGoerli,
  optimismSepolia,
  polygonMumbai,
  polygonZkEvm,
  scrollSepolia,
  baseSepolia,
  goerli,
  polygon,
  avalanche,
  arbitrum,
  fantom,
  optimism,
  sepolia,
  scroll,
  metis,
  base,
  gnosis,
  celo,
  zkSync
} from 'viem/chains';
import {defineChain} from 'viem'


export const assetChainTestnet = /*#__PURE__*/ defineChain({
  id: 42_421,
  name: 'AssetChain Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Real World Asset',
    symbol: 'RWA',
  },
  rpcUrls: {
    default: { http: ['https://enugu-rpc.assetchain.org'] },
  },
  blockExplorers: {
    default: {
      name: 'Asset Chain Testnet Explorer',
      url: 'https://scan-testnet.assetchain.org',
      apiUrl: 'https://scan-testnet.assetchain.org/api',
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: '0x989F832D35988cb5e3eB001Fa2Fe789469EC31Ea',
      blockCreated: 17177,
    },
  },
});

export const ChainId = {
  assetchain_testnet: assetChainTestnet.id,
  mainnet: mainnet.id,
  goerli: goerli.id,
  polygon: polygon.id,
  mumbai: polygonMumbai.id,
  avalanche: avalanche.id,
  fuji: avalancheFuji.id,
  arbitrum_one: arbitrum.id,
  arbitrum_goerli: arbitrumGoerli.id,
  arbitrum_sepolia: arbitrumSepolia.id,
  fantom: fantom.id,
  fantom_testnet: fantomTestnet.id,
  optimism: optimism.id,
  optimism_sepolia: optimismSepolia.id,
  optimism_goerli: optimismGoerli.id,
  harmony: harmonyOne.id,
  sepolia: sepolia.id,
  scroll: scroll.id,
  scroll_sepolia: scrollSepolia.id,
  metis: metis.id,
  base: base.id,
  base_sepolia: baseSepolia.id,
  bnb: bsc.id,
  gnosis: gnosis.id,
  zkEVM: polygonZkEvm.id,
  celo: celo.id,
  zkSync: zkSync.id,
} as const;
