"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

type Props = {};

const Flight = (props: Props) => {
  const [count, setCount] = useState(0);
  const incrementValue = () => {
    console.log("Call this function ", count);
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex items-center border-2 al">
        <Button
          onClick={() => {
            for (let i = 0; i < 10; i++) {
              let temp = count + 1;
              incrementValue();
            }
          }}
        >
          Test
          <h1 className="border-1">{count}</h1>
        </Button>
        <Label>HMAed</Label>
      </div>
    </>
  );
};

export default Flight;
