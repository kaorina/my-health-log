"use client"; // Error components must be Client components

import { useEffect } from "react";
import { Heading, Button } from "./common/components";

export default function Error({
  error, // throw された例外オブジェクトが入る
  reset, // 例外が発生したコンポーネントを再レンダリングするための関数
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <Heading mb={4} fontSize='1.5em' color='gray'>予期せぬエラーが発生しました。</Heading>
      <Button onClick={() => reset()} bg='tomato' color='white' _hover={{ bg: 'blue' }}>Try again</Button>
    </div>
  );
}