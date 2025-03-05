import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/images/payskul-logo.png";
import logoBlack from "../../assets/images/payskul-logo.png";

export default function Logo({ variant }) {
  return (
    <Link to="/" className="relative z-20">
      <img
        src={variant === "secondary" ? logoWhite : logoBlack}
        alt="logo"
        className="object-cover w-24"
      />
    </Link>
  );
}
