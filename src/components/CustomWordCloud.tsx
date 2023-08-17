"use client";
import React from "react";
import D3WordCloud from "react-d3-cloud";
import { useTheme } from "next-themes";

type Props = {};
const data = [
  {
    text: "NextJs",
    value: 3,
  },
  {
    text: "C#.net",
    value: 5,
  },
  {
    text: "React",
    value: 10,
  },
  {
    text: "AI",
    value: 20,
  },
  {
    text: "ReactNative",
    value: 35,
  },
  {
    text: "Hey",
    value: 3,
  },
];
const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const CustomWordCloud = (props: Props) => {
  const theme = useTheme();
  return (
    <>
      <D3WordCloud
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        data={data}
      />
    </>
  );
};

export default CustomWordCloud;
