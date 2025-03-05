import { clsx } from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMenu } from "../../hooks/useMenu";
import FlexBox from "../core/FlexBox";
import Button from "../core/Button";
import DownloadButton from "../core/DownloadButton";

export default function NavLinksDesktop() {
  const { currentPage, setCurrentPage } = useMenu();
  const NAV_LINKS = ['Home', 'Features', 'Pricing', 'About Us', 'Help'];


  return (
    <nav className="hidden flex-1 justify-end gap-6  capitalize md:flex md:text-sm lg:text-base">
      {NAV_LINKS.map((link) => {
        if (link.href === "contact") {
          return (
            <Link
              onClick={setCurrentPage.bind(null, link.href)}
              className={clsx(
                "after:bg-primary after:transition-width relative py-2 after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
                {
                  "after:w-0": currentPage !== link.href,
                  "after:w-full": currentPage === link.href,
                },
              )}
              key={link.href}
              to={`/${link.href}`}
            >
              {link.text}
            </Link>
          );
        } else {
          return (
            <AnchorLink
              className={clsx(
                "after:bg-primary after:transition-width relative py-2 after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
                {
                  "after:w-0": currentPage !== link.href,
                  "after:w-full": currentPage === link.href,
                },
              )}
              key={link.href}
              href={`#${link.href}`}
              offset={100}
              onClick={setCurrentPage.bind(null, link.href)}
            >
              {link.text}
            </AnchorLink>
          );
        }
      })}
      <FlexBox className="ml-auto">
        <Button href="/contact" variant="secondary" size="medium">
          Become a Partner
        </Button>
        <DownloadButton className="md:hidden lg:block" size="medium" />
      </FlexBox>
    </nav>
  );
}
