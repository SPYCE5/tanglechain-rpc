export const chains = [
  {
    name: "ShimmerEVM Testnet",
    chain: "SMR",
    icon: "/icons/shimmer.svg",
    rpc: ["https://json-rpc.evm.testnet.shimmer.network/"],
    features: [],
    faucets: ["https://evm-toolkit.evm.testnet.shimmer.network/", "https://evm-faucet.testnet.shimmer.network/"],
    nativeCurrency: {
      name: "Shimmer",
      symbol: "SMR",
      decimals: 6,
    },
    infoURL: "https://shimmer.network/",
    shortName: "Shimmer",
    chainId: 1072,
    networkId: 1072,
    slip44: 4219,
    explorers: [
      {
        name: "Explorer",
        url: "https://explorer.evm.testnet.shimmer.network/",
        standard: "EIP3091",
      },
    ],
  },
  {
    name: "ShimmerEVM",
    chain: "SMR",
    icon: "/icons/shimmer.svg",
    rpc: ["https://json-rpc.evm.shimmer.network/"],
    features: [],
    faucets: [],
    nativeCurrency: {
      name: "Shimmer",
      symbol: "SMR",
      decimals: 6,
    },
    infoURL: "https://shimmer.network/",
    shortName: "Shimmer",
    chainId: 148,
    networkId: 148,
    slip44: 4219,
    explorers: [
      {
        name: "Explorer",
        url: "https://explorer.evm.shimmer.network/",
        standard: "EIP3091",
      },
    ],
  },
];
