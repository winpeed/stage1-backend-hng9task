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
    operation_type: string;
    result: number;
  }>
) {
  if (req.method == "POST") {
    console.log(
      "typeof req.body.operation_type",
      typeof req.body.operation_type
    );

    console.log("typeof req.body.result", typeof req.body.result);

    console.log("typeof req.body.x", typeof req.body.x);
    console.log("typeof req.body.y", typeof req.body.y);
    res.status(200).json({
      slackUsername: "PraiseObende",
      operation_type: EnumType[0] || EnumType[1] || EnumType[2],
      result:
        req.body.operation_type == EnumType[0]
          ? req.body.x + req.body.y
          : req.body.operation_type == EnumType[1]
          ? req.body.x - req.body.y
          : req.body.operation_type == EnumType[2]
          ? req.body.x * req.body.y
          : 0,
    });
    console.log("typeof req.body.result", typeof req.body.result);
  }
}
