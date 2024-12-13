import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav>
      <ul className="main-menu">
        <li><Link to="/home">Home</Link></li>

        <li className="has-submenu">
          <Link to="/about">About</Link>
          <ul className="submenu">
            <li><Link to="/about/regular-buses">About Us</Link></li>
            <li><Link to="/about/vision-and-mission">Vision and Mission</Link></li>
            <li><Link to="/about/board-of-directors">Board of Directors</Link></li>
            <li><Link to="/about/our-orgnization">Our Organization</Link></li>
            <li><Link to="/about/major-achievements">Major Achievements</Link></li>
            <li><Link to="/about/statistics">Statistics</Link></li>
            <li><Link to="/about/financial-performance">Financial Performance</Link></li>
          </ul>
        </li>

        <li className="has-submenu">
          <Link to="/services">Services</Link>
          <ul className="submenu">
            <li><Link to="/services/regular-buses">Regular Buses</Link></li>
            <li><Link to="/services/rainbow-buses">Rainbow Buses</Link></li>
            <li><Link to="/services/ladies-special">Ladies Special</Link></li>
            <li><Link to="/services/punydasham-services">Punydasham Services</Link></li>
            <li><Link to="/services/pune-darshan">Pune Darshan</Link></li>
            <li><Link to="/services/casual-contact-bus">Casual Contract Bus</Link></li>
            <li><Link to="/services/pass-services">Pass Services</Link></li>
            <li><Link to="/services/pushpak-bus-services">Pushpak Bus Services</Link></li>
          </ul>
        </li>

        <li className="has-submenu">
          <Link to="/media-center">Media Center</Link>
          <ul className="submenu">
            <li><Link to="/media-center/press-releases">Press Releases</Link></li>
            <li><Link to="/media-center/whats-new">What's New</Link></li>
            <li><Link to="/media-center/advertisements">Advertisements</Link></li>
            <li><Link to="/media-center/news-and-media">News & Media</Link></li>
            <li><Link to="/media-center/gallery">Gallery</Link></li>
            <li><Link to="/media-center/media-contacts">Media Contacts</Link></li>
            <li><Link to="/media-center/site-map">Site Map</Link></li>
          </ul>
        </li>

        <li className="has-submenu">
          <Link to="/journy-planner">Journey Planner</Link>
          <ul className="submenu">
            <li><Link to="/journy-planner/grievances">Grievances</Link></li>
            <li><Link to="/journy-planner/rti">RTI</Link></li>
            <li><Link to="/journy-planner/faqs">FAQs</Link></li>
            <li><Link to="/journy-planner/citizen-charter">Citizen Charter</Link></li>
          </ul>
        </li>

        <li className="has-submenu">
          <Link to="/online-services">Online Services</Link>
          <ul className="submenu">
            <li><Link to="/online-services/pune-darshan">Pune Darshan</Link></li>
          </ul>
        </li>

        <li className="has-submenu">
          <Link to="/tenders">Tender Details</Link>
          <ul className="submenu">
            <li><Link to="/tenders/tenders-and-corrigendum">Tenders & Corrigendum</Link></li>
            <li><Link to="/tenders/awarded-tenders">Awarded Tenders</Link></li>
            <li><Link to="/tenders/vendors">Vendors</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
