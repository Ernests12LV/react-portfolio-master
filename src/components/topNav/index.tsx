import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Navbar } from 'react-bootstrap'
import { NavbarProps } from 'react-bootstrap'
import NavMenu from './navMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Portfolio from '../../models/portfolio'
import $ from 'jquery'
import './style.scss'
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const TopNav: React.FC<Portfolio> = props => {
    const sections = ['intro', 'resume', 'portfolio']; // Add your section IDs here
    const activeSection = useScrollSpy(sections, 70); // 70px offset for navbar height

    return (
        <Navbar
            id="navbar"
            expand="lg"
            className="navbar-dark fixed-top"
        >
            <Navbar.Brand href="#intro">{props.brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <NavMenu sections={sections} activeSection={activeSection} />
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = (state: RootState) => {
    return state.portfolio
}

export default compose(connect<{}, {}, any, any>(mapStateToProps))(TopNav)
