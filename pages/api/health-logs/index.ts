// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { randomUUID } from "crypto";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await delay(1500);
    const healthLogs = JSON.parse(fs.readFileSync("health-logs.json", "utf8"));
    healthLogs.healthLogs.sort((a: any, b: any) => {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });
    res.status(200).json(healthLogs);
  } else if (req.method === "POST") {
    await delay(1000);
    const healthLogs = JSON.parse(fs.readFileSync("health-logs.json", "utf8"));
    const id = healthLogs.healthLogs.length + 1;
    const { userId, content } = req.body;
    const date = new Date();
    const newHealthLog = {
      id,
      userId,
      content,
      createdAt: date,
      updatedAt: date,
    };
    healthLogs.healthLogs.push(newHealthLog);
    fs.writeFileSync("health-logs.json", JSON.stringify(healthLogs));
    res.status(201).json(newHealthLog);
  } else {
    res.status(405).end();
  }
}