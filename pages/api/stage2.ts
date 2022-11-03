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
  const calculateResult = (x: number, y: number) => {
    return req.body.operation_type == EnumType[0]
      ? x + y
      : req.body.operation_type == EnumType[1]
      ? x - y
      : req.body.operation_type == EnumType[2]
      ? x * y
      : 0;
  };

  if (req.method == "POST") {
    console.log("result", calculateResult(req.body.x, req.body.y));
    console.log("result2", calculateResult(10, 20));
    res.status(200).json({
      slackUsername: "PraiseObende",
      operation_type: EnumType[0] || EnumType[1] || EnumType[2],
      result: calculateResult(req.body.x, req.body.y),
    });
  }
}
