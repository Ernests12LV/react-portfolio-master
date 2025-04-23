import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import ProjectCard from './projectCard'
import Project from '../../models/project'

export interface SectionProps {
    id: string;
    menu: string;
    headline: string;
    subhead: string;
    projects: Project[];
}

export const Section: React.FC<SectionProps> = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <section className="portfolio-section">
            <Container>
                <h2>{props.headline}</h2>
                <Row>
                    {props.projects.map((project, index) => (
                        <Col key={index} md={4}>
                            <ProjectCard
                                {...project}
                                onClick={() => openLightbox(index)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={props.projects.map(project => ({
                    src: project.image,
                    alt: project.title
                }))}
            />
        </section>
    )
}

export default Section
