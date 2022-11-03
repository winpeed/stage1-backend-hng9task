import type { NextApiRequest, NextApiResponse } from "next";

enum EnumType {
  addition,
  subtraction,
  multiplication,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    slackUsername: string;
    operation_type: EnumType;
    result: number;
  }>
) {
  if (req.method == "POST") {
    res.status(201).json({
      slackUsername: "PraiseObende",
      operation_type: req.body.operation_type,
      result:
        req.body.operation_type == EnumType[0]
          ? req.body.x + req.body.y
          : req.body.operation_type == EnumType[1]
          ? req.body.x - req.body.y
          : req.body.operation_type == EnumType[2]
          ? req.body.x * req.body.y
          : 0,
    });
  }
}
