import { clsx } from "clsx";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { useMenu } from "../../hooks/useMenu";
import Button from "../core/Button";
import DownloadButton from "../core/DownloadButton"; // Fixed import name

export default function NavLinksMobile() {
  const { isNavOpen, closeMenu } = useMenu();
  const NAV_LINKS = [
    { href: 'home', text: 'Home' },
    { href: 'features', text: 'Features' },
    { href: 'pricing', text: 'Pricing' },
    { href: 'about-us', text: 'About Us' },
    { href: 'help', text: 'Help' }
  ];
  
  return (
    <>
      <figure
        className={clsx(
          "fixed inset-0 z-10 backdrop-blur-[3px] backdrop-brightness-75 md:hidden",
          {
            hidden: !isNavOpen,
          },
        )}
        onClick={closeMenu}
      />
      <nav
        className={clsx(
          "transition-right fixed top-0 bottom-0 z-20 w-2/3 space-y-8 bg-stone-50 px-3 py-6 duration-500 sm:w-1/2 md:hidden",
          {
            "-right-[100dvw]": !isNavOpen,
            "right-0": isNavOpen,
          },
        )}
      >
        <ul className="grid gap-3 text-center capitalize *:px-3 *:py-4">
          {NAV_LINKS.map((link) => {
            if (link.href === "contact") {
              return (
                <li key={link.href}>
                  <Link to={`/${link.href}`}>{link.text}</Link>
                </li>
              );
            } else {
              return (
                <li key={link.href}>
                  <AnchorLink
                    href={`#${link.href}`}
                    offset={100}
                    onClick={closeMenu}
                  >
                    {link.text}
                  </AnchorLink>
                </li>
              );
            }
          })}
        </ul>
        <div className="grid gap-5">
          <Button href="/contact" variant="secondary">
            Become a Partner
          </Button>
          <DownloadButton />
        </div>
      </nav>
    </>
  );
}