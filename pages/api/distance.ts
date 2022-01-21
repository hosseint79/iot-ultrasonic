import type { NextApiRequest, NextApiResponse } from "next";

let globalDis: any = 0;

type Data = {
  distance: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  globalDis = req.query.id;
  res.status(200).json({ distance: globalDis + "" });
}
