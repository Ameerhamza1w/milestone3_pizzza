import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <footer className="bg-black py-8">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Navigation Links */}
          <nav className="flex justify-center flex-wrap gap-8 text-slate-300 font-medium mb-6">
            <a className="hover:text-cyan-500 text-amber-500 transition duration-300" href="/">
              Home
            </a>
            <a className="hover:text-cyan-500 text-amber-500 transition duration-300" href="/">
              About
            </a>
            <a className="hover:text-cyan-500 text-amber-500 transition duration-300" href="/">
              Delivery
            </a>
            <a className="hover:text-cyan-500 text-amber-500 transition duration-300" href="/">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-6 flex-wrap gap-4">
            <a href="/" target="_blank" rel="nofollow noopener">
              <Image
                src="/fb.png" // Ensure this file is in the `public` folder
                alt="Facebook"
                width={48}
                height={48}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/ameerhamzamemon" target="_blank" rel="nofollow noopener">
              <Image
                src="/lin.webp" // Ensure this file is in the `public` folder
                alt="LinkedIn"
                width={48}
                height={48}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="/" target="_blank" rel="nofollow noopener">
              <Image
                src="/insta.webp" // Ensure this file is in the `public` folder
                alt="Instagram"
                width={48}
                height={48}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="/" target="_blank" rel="nofollow noopener">
              <Image
                src="/tt.png" // Ensure this file is in the `public` folder
                alt="Twitter"
                width={48}
                height={48}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-amber-400 font-medium mb-4 text-sm">
            © 2024 Ameer Hamza Memon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
