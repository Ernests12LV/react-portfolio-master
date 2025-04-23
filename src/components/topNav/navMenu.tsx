import React from 'react';
import { Nav } from 'react-bootstrap';

interface NavMenuProps {
    sections: string[];
    activeSection: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ sections, activeSection }) => {
    return (
        <Nav className="ms-auto">
            {sections.map(section => (
                <Nav.Link
                    key={section}
                    href={`#${section}`}
                    className={activeSection === section ? 'active' : ''}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
            ))}
        </Nav>
    );
};

export default NavMenu;
