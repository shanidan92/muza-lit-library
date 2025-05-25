import React from "react";
import "./MusicSidebar.css";
import MuzaIcon from "~/icons/MuzaIcon";
import type { MenuItem, Section } from "~/appData/models";

interface MusicSidebarProps {
  logoSrc: string;
  logoAlt?: string;
  sections: Section[];
}

const MusicSidebar: React.FC<MusicSidebarProps> = ({
  logoSrc,
  logoAlt = "Logo",
  sections,
}) => {
  const handleItemClick = (action?: () => void) => {
    if (action) {
      action();
    }
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    return (
      <a
        key={index}
        className="menu-item"
        onClick={() => handleItemClick(item.action)}
      >
        <MuzaIcon iconName={item.svg} />
        <span>{item.text}</span>
      </a>
    );
  };

  const renderSection = (section: Section, index: number) => (
    <div key={index} className="section">
      <div className="section-title">{section.title}</div>
      {section.items.map(renderMenuItem)}
    </div>
  );

  return (
    <div className="music-sidebar">
      <div className="logo">
        <img src={logoSrc} alt={logoAlt} />
      </div>
      {sections.map(renderSection)}
    </div>
  );
};

export default MusicSidebar;
