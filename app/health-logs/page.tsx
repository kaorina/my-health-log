import type { HealthLog } from "../types";
import HealthLogList from "../components/HealthLogList";

async function getHealthLogs() {
  const res = await fetch("http://localhost:3000/api/health-logs", {
    cache: "no-store", //データのキャシュは行わない
  });

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  //throw new Error("test!Failed to fetch articles");

  const data = await res.json();
  return data.healthLogs as HealthLog[];
}

export default async function HomeLog() {
  const healthLogs = await getHealthLogs();

  return (
    <div>
      <h1>健康ログ一覧</h1>
      <HealthLogList healthLogs={healthLogs} />
      { /*<ul>
        { healthLogs.map((healthLog) => (
          <li key={ healthLog.createdAt }>
            { healthLog.createdAt } 
            { healthLog.content }
          </li>
        )) }
        </ul> */ }
    </div>
  );
}