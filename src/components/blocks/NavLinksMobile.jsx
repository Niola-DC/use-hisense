import { clsx } from "clsx";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "../../hooks/useMenu";
import Button from "../core/Button";
import DownloadButton from "../core/DownloadButton";

export default function NavLinksMobile() {
  const { isNavOpen, closeMenu } = useMenu();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const NAV_LINKS = [
    { href: "home", text: "Home" },
    { href: "features", text: "Features" },
    { href: "about-us", text: "About Us" },
    { href: "subscribe", text: "Subscribe" },
    { href: "contact", text: "Help" },
  ];

  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = () => {
    const apkUrl = "https://payskul-apk.s3.eu-west-1.amazonaws.com/production/payskul.apk";
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 's3://payskul-apk/production/payskul.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    localStorage.setItem('hasDownloadedApp', 'true');
    setHasDownloaded(true);
  };
  
  return (
    <>
      <figure
        className={clsx(
          "fixed inset-0 z-10 backdrop-blur-[3px] backdrop-brightness-75 md:hidden",
          { hidden: !isNavOpen }
        )}
        onClick={closeMenu}
      />
      <nav
        className={clsx(
          "transition-right fixed top-0 bottom-0 z-20 w-2/3 space-y-8 bg-primary px-3 py-6 duration-500 sm:w-1/2 md:hidden",
          { "-right-[100dvw]": !isNavOpen, "right-0": isNavOpen }
        )}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="py-10 grid gap-3 text-center capitalize *:px-3 *:py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="text-white text-left">
              {link.href === "contact" ? (
                <Link
                  to={`/${link.href}`}
                  onClick={() => {
                    closeMenu();
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.text}
                </Link>
              ) : isHomePage ? (
                <AnchorLink
                  href={`#${link.href}`}
                  offset={110}
                  onClick={closeMenu}
                >
                  {link.text}
                </AnchorLink>
              ) : (
                <Link to={`/#${link.href}`} onClick={closeMenu}>
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="grid gap-5 text-white">
          <Button href="/contact" variant="secondary" size="medium">
            Become a Partner
          </Button>
          <DownloadButton size="medium" onClick={handleDownload} />
        </div>
      </nav>
    </>
  );
}
