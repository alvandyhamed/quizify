import React from "react";
import jalaliMoment from "jalali-moment";

interface Props {
  unixTimestamp: string;
}

function convertUnixToJalali(unixTimestamp: string): string {
  const unixTimestampNumber = parseInt(unixTimestamp, 10);

  if (isNaN(unixTimestampNumber)) {
    return "Invalid Unix timestamp";
  }

  const jalaliDateTime = jalaliMoment(unixTimestampNumber * 1000).format(
    "jYYYY-jMM-jDD HH:mm:ss"
  );

  return jalaliDateTime;
}

const UnixToJalaliConverter: React.FC<Props> = ({ unixTimestamp }) => {
  const jalaliDateTime = convertUnixToJalali(unixTimestamp);

  return <div className="w-1/5 border-yellow-50">{jalaliDateTime}</div>;
};

export default UnixToJalaliConverter;
