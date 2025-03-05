import React from "react";
import Button from "./Button";
import FlexBox from "./FlexBox";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadButton({ size, className }) {
  return (
    <Button size={size} className={className}>
      <FlexBox className="items-center justify-center">
        <span>Download now</span>
        <ArrowDownTrayIcon className="size-5" />
      </FlexBox>
    </Button>
  );
}
