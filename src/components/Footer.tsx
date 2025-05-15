
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-school-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/placeholder.svg"
                alt="SMKN 9 Bandar Lampung Logo"
                className="h-12 w-12"
              />
              <div className="ml-3">
                <h3 className="text-lg font-bold">SMKN 9</h3>
                <p className="text-xs text-gray-300">Bandar Lampung</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Excellence in vocational education, developing skilled professionals for the future of Indonesia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Computer and Network Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Software Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Multimedia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Accounting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Office Administration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>Jl. Pangeran Tirtayasa No. 88</p>
              <p>Bandar Lampung, Lampung 35145</p>
              <p>Indonesia</p>
              <p className="pt-2">Phone: +62 721 123456</p>
              <p>Email: info@smkn9bdl.sch.id</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SMKN 9 Bandar Lampung. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
