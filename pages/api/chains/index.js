import absoluteUrl from "next-absolute-url";

import { chains } from "../../../data/chains";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  const { origin } = absoluteUrl(req);
  const chainsInjectPaths = chains.map((chain) => ({
    ...chain,
    icon: chain.icon.startsWith("/icons")
      ? `${origin}${chain.icon}`
      : `${origin}/icons/unknown.png`,
  }));

  if (req.method === "GET") {
    return res.status(200).json(chainsInjectPaths);
  }
}
