import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar-inner" style={{ height: '88px', padding: '8px 0' }}>
            {/* Perfectly Sized & Centered Logo Mark */}
            <Logo align="center" iconSize={32} fontSize="1.38rem" />

            {/* Desktop Links */}
            <nav className="nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  style={{ fontStyle: 'normal' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Far Right Icon CTA & Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link
                to="/contact"
                className="nav-action-icon"
                title="Book Appointment"
                aria-label="Book Appointment"
              >
                <ShoppingBag size={20} />
              </Link>

              <button
                className="mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div onClick={() => setMobileOpen(false)}>
            <Logo align="center" iconSize={34} fontSize="1.45rem" />
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ color: 'var(--text-main)' }}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="drawer-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`drawer-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
                style={{ fontStyle: 'normal' }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
          <a
            href="https://wa.me/918421614951?text=Hi%20Komal%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-full"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
