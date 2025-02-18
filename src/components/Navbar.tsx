import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween padding-container py-5 z-30 shadow-md">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={76} height={29} alt="logo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="text-base text-gray-50 hover:text-gray-90 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          variant="btn_dark_green"
          title="Log In"
          icon="/user.svg"
        />
      </div>

      <Image
        src="menu.svg"
        alt="hamburger menu"
        width={32}
        height={32}
        className="lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
