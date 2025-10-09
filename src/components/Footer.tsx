import { Facebook, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Dar Al-Hikmah Logo" className="h-12 w-12 object-contain bg-white rounded-lg p-1" />
              <div>
                <h3 className="font-bold text-lg">Dar Al-Hikmah</h3>
                <p className="text-sm opacity-80">Islamic Foundation</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Serving the Muslim community with dedication, knowledge, and compassion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#dawah" className="opacity-80 hover:opacity-100 transition-opacity">Dawah Programs</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/daralhikmafondation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:admin@daral-hikmah.org"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-80">
              Stay updated with our latest news and events by following us on social media.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Dar Al-Hikmah Islamic Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
