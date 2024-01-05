import { notFound } from "next/navigation";
import { HealthLog } from "../../types";
import { Heading } from "../../common/components";

const getHealthLog = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/health-logs/${slug}`, {
    cache: "no-store", //データのキャシュは行わない
  });

  if (res.status === 404) {
    // notFound 関数を呼び出すと not-fount.tsx を表示する
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch health log");
  }

  const data = await res.json();
  return data as HealthLog;
};

export default async function HealthLogDetail ({
  params,
}: {
  params: { slug: string };
}) {
  const healthLogPromise = getHealthLog(params.slug);
  const healthLog = await healthLogPromise;
  
  return (
    <div>
      <Heading size="md">{healthLog.createdAt}</Heading>
      <div>{healthLog.content}</div>
    </div>
  );
}

