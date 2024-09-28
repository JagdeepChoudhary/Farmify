import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">FarmMarket</h3>
            <p className="text-sm text-muted-foreground">
              Connecting farmers and consumers for fresh, local produce.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-sm hover:underline">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-sm hover:underline">
                  Sellers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:underline">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm hover:underline">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FarmMarket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
