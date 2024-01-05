import { VStack } from "../common/components";
import HealthLogCard from "./HealthLogCard";
import { HealthLog } from "../types";

export default function HealthLogList({ healthLogs }: { healthLogs: HealthLog[] }) {
  return (
    <VStack spacing={4} as="ul">
      {healthLogs.map((healthLog) => (
        <HealthLogCard key={healthLog.id} healthLog={healthLog} />
      ))}
    </VStack>
  );
}