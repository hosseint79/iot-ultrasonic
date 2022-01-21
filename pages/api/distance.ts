import type { NextApiRequest, NextApiResponse } from "next";

export let globalDis: any = 0;

type Data = {
  distance: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    res.status(200).json({ distance: globalDis + "" });
  } else {
    globalDis = req.query.id;
    console.log(globalDis);
    res.status(200).json({ distance: "true" });
  }
}
