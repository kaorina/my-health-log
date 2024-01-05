import type { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse, HealthLog } from '../../types';

export default async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  if (req.method === 'POST') {
    const { log } = req.body as HealthLog;

    // ここでChatGPTにリクエストを送るか、データベースに保存するなどの処理を行う
    // 例として、単純な応答メッセージを返す
    res.status(200).json({ message: '受信した健康ログ: ${log}' });
  } else {
    // POST以外のリクエストを拒否  
    res.status(405).end();
  }
};