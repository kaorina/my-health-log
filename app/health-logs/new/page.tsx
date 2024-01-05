"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "../../common/components";

export default function CreateHealthLog() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/health-logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    setLoading(false);
    router.push("/health-logs"); // トップページに戻る

    // 記事一覧に新規登録したHealthログを表示したいので、キャッシュを利用しないように再取得する
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div>
      <Heading mb={4} as='h3' size='lg'>きろくの作成</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>UserId(入力させずにhiddenで送りたい)</FormLabel>
          <Input value={userId} onChange={(e) => setUserId(e.target.value)} />

          <FormLabel>本文</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='今日の体調や気分はどうでしたか？'
          />
          <Button
            type="submit"
            color="white"
            bg="orange.400"
            isLoading={loading || isPending}
            mt={4}
          >
            作成
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
