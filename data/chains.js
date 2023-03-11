export const chains = [
  {
    name: "Shimmer EVM Testnet",
    chain: "SMR",
    icon: "shimmer",
    rpc: ["https://json-rpc.evm.testnet.shimmer.network"],
    features: [],
    faucets: [],
    nativeCurrency: {
      name: "Shimmer",
      symbol: "SMR",
      decimals: 18,
    },
    infoURL: "https://shimmer.network/",
    shortName: "Shimmer",
    chainId: 1070,
    networkId: 1070,
    slip44: 60,
    ens: {
      registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    explorers: [
      {
        name: "BlockScout",
        url: "https://explorer.evm.testnet.shimmer.network",
        standard: "EIP3091",
      },
    ],
  },
];
