import { Button, Heading } from "../common/components";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <div>
      <Heading as='h4' size='md' mb={4}>お探しの記事が見つかりませんでした。</Heading>
      <Button as={NextLink} href="/health-logs">
        一覧へ戻る
      </Button>
    </div>
  );
}