import { chains } from "../../../data/chains";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  if (req.method === "GET") {
    return res.status(200).json(chains);
  }
}
