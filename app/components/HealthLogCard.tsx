import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "../common/components";
import NextLink from "next/link";
import { HealthLog } from "../types";

export default function HealthLogCard({ healthLog }: { healthLog: HealthLog }) {
  const formattedDate = new Date(healthLog.createdAt).toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Card
      as={"li"}
      _hover={{
        boxShadow: "xl",
      }}
      minW="100%"
    >
      <NextLink href={`/health-logs/${healthLog.slug}`}>
        <CardHeader>
          <Heading size="md">{formattedDate}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{healthLog.content.substring(0, 200)}...</Text>
        </CardBody>
      </NextLink>
    </Card>
  );  
}  