// import React from "react";
// import Button from "./Button";
// import FlexBox from "./FlexBox";
// import { ArrowRightIcon } from "@heroicons/react/24/solid";

// export default function SubmitButton({ size, className }) {
//   return (
//     <Button size={size} className={`bg-primary ${className}`} variant="secondary">
//       <FlexBox className="items-center justify-center">
//         <span className="text-white">Submit</span>
//         <ArrowRightIcon className="h-5 w-5 text-white" />
//       </FlexBox>
//     </Button>
//   );
// }



import React from "react";
import Button from "./Button";
import FlexBox from "./FlexBox";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function SubmitButton({ size, className, onClick, disabled, label }) {
  return (
    <Button size={size} className={`bg-primary ${className}`} variant="secondary" onClick={onClick} disabled={disabled}>
      <FlexBox className="items-center justify-center">
        <span className="text-white">{label}</span>
        <ArrowRightIcon className="h-5 w-5 text-white" />
      </FlexBox>
    </Button>
  );
}
