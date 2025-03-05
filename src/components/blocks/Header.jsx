import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Container from "../core/Container";
import Logo from "./Logo";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useMenu } from "../../hooks/useMenu";

export default function Header() {
  const { openMenu } = useMenu();

  return (
    <React.Fragment>
      <header className="sticky top-0 left-0 z-10 w-full border-b bg-primary px-10 py-8 lg:py-12">
        <Container>
          <div className="flex items-center justify-end md:gap-16 lg:gap-20">
            <Logo />
            <NavLinksDesktop />
            <Bars3BottomRightIcon
              onClick={openMenu}
              className="relative z-20 ml-auto size-8 cursor-pointer text-stone-800 md:hidden"
            />
          </div>
        </Container>
      </header>
      <NavLinksMobile />
    </React.Fragment>
  );
}
