import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: t("header.home"), href: "/" },
    { name: t("header.howToPlay"), href: "/how-to-play" },
    { name: t("header.about"), href: "/about" },
    { name: t("header.faq"), href: "/faq" },
    { name: t("header.blog"), href: "/blog" },
    { name: t("header.contact"), href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/logo.webp"
            alt="XSNAP Fantasy Cricket"
            className="h-10 w-auto" style={{height: '76px'}}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/60"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <LanguageSwitcher />
          <Link href="/login">
            <Button variant="ghost">{t("header.login")}</Button>
          </Link>
          <Link href="/register">
            <Button>{t("header.getStarted")}</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container space-y-1 py-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/login">
                <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full glossy-btn" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
