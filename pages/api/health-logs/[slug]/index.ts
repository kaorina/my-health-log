import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  const slug = req.query.slug;
  if (req.method === 'GET'){
    await delay(1000);
    const healthLogs = fs.readFileSync("health-logs.json", "utf8");
    const healthLog = JSON.parse(healthLogs).healthLogs.find(
      (a: any) => a.slug === slug
    );
    if (!healthLog){
      res.status(404).end();
    }

    res.status(200).json(healthLog);
  }  
}