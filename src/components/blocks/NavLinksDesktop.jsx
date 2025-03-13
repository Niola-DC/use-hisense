import { clsx } from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMenu } from "../../hooks/useMenu";
import FlexBox from "../core/FlexBox";
import DownloadButton from "../core/DownloadButton";

export default function NavLinksDesktop() {
  const { currentPage, setCurrentPage } = useMenu();
  const NAV_LINKS = [
    { href: "home", text: "Home" },
    { href: "features", text: "Features" },
    { href: "pricing", text: "Pricing" },
    { href: "about-us", text: "About Us" },
    { href: "contact", text: "Help" },
  ];

  return (
    <nav className="hidden flex-1 justify-start gap-10 capitalize text-white md:flex md:text-sm lg:text-base">
      {NAV_LINKS.map((link) => {
        const linkClass = clsx(
          "after:bg-primary after:transition-width relative py-2 after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
          {
            "after:w-0": currentPage !== link.href,
            "after:w-full": currentPage === link.href,
          }
        );

        return link.href === "contact" ? (
          <Link
            onClick={setCurrentPage.bind(null, link.href)}
            className={linkClass}
            key={link.href}
            to={`/${link.href}`}
          >
            {link.text}
          </Link>
        ) : (
          <AnchorLink
            // className={linkClass}
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
      })}
      <FlexBox className="ml-16">
        <DownloadButton className="md:hidden lg:block" size="small" />
      </FlexBox>
    </nav>
  );
}
