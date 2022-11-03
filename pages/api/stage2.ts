import type { NextApiRequest, NextApiResponse } from "next";

enum EnumType {
  addition = "addition",
  subtraction = "subtraction",
  multiplication = "multiplication",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    slackUsername: string;
    operation_type: EnumType;
    result: number;
  }>
) {
  const calculateResult = (x: number, y: number) => {
    return req.body.operation_type == EnumType.addition
      ? x + y
      : req.body.operation_type == EnumType.subtraction
      ? x - y
      : req.body.operation_type == EnumType.multiplication
      ? x * y
      : 0;
  };

  if (req.method == "POST") {
    console.log("result", calculateResult(req.body.x, req.body.y));
    console.log("result2", calculateResult(10, 20));
    res.status(200).json({
      slackUsername: "PraiseObende",
      operation_type: req.body.operation_type,
      result: calculateResult(req.body.x, req.body.y),
    });
  }
}
