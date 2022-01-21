import type { NextApiRequest, NextApiResponse } from "next";
import { globalDis } from "../../data";

type Data = {
  result: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ result: "true" });
}
