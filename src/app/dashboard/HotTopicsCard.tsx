import CustomWordCloud from "@/components/CustomWordCloud";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2 font-bold">Hot Topics</CardTitle>
      </CardHeader>
      <CardDescription className="pl-6">
        click on a Topic to start a quiz on it
      </CardDescription>
      <CardContent className="pl-2">
        <CustomWordCloud />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
