import type { NextApiRequest, NextApiResponse } from "next";

let globalDis = 0;

type Data = {
  distance: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  globalDis = globalDis + 1;
  res.status(200).json({ distance: globalDis + "" });
}
