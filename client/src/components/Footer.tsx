import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="XSNAP Fantasy Cricket"
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Free-to-play fantasy cricket platform for education and entertainment.
            </p>
            <div className="flex space-x-3">
              <img src="/assets/badge_18plus.png" alt="18+" className="h-12 w-auto" />
              <img src="/assets/badge_fair_play.png" alt="Fair Play" className="h-12 w-auto" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-to-play">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    How To Play
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Terms & Conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/fair-play">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Fair Play Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Responsible Gaming
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">XSNAP IMAGING PRIVATE LIMITED</p>
              <p>CIN: U31909MH2019PTC325365</p>
              <p>PAN: AAACX2946B</p>
              <p className="pt-2">
                <strong>Head Office:</strong><br />
                House No. 260, Near Sai Papers,<br />
                Jambhall, Badalpur,<br />
                Thane, Maharashtra 421503
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-2">⚠️ Legal Disclaimer</p>
            <p className="text-sm text-muted-foreground">
              This platform is <strong>NOT available</strong> in Andhra Pradesh, Assam, Odisha, 
              Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. 
              This is a skill-based, free-to-play platform with <strong>no real money involved</strong>.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {currentYear} XSNAP IMAGING PRIVATE LIMITED. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ for cricket fans across India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
