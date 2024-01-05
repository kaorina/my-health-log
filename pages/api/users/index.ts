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
    const users = JSON.parse(fs.readFileSync("users.json", "utf8"));
    users.users.sort((a: any, b: any) => {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });
    res.status(200).json(users);
  } else if (req.method === "POST") {
    await delay(1000);
    const { title, content } = req.body;
    const users = JSON.parse(fs.readFileSync("users.json", "utf8"));
    const id = users.users.length + 1;
    const lineUserId = randomUUID();
    const birthday = new Date();
    const date = new Date();
    const newUser = {
      id,
      lineUserId,
      birthday,
      createdAt: date,
      updatedAt: date,
    };
    users.users.push(newUser);
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.status(201).json(newUser);
  } else {
    res.status(405).end();
  }
}