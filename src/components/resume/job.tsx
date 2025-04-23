import React from 'react'
import { Badge } from 'react-bootstrap'

export interface JobProps {
    timeframe: string
    title: string
    company: string
    summary: string
}

export const Job: React.FC<JobProps> = props => (
    <React.Fragment>
        <Badge bg="dark" className="float-right bg-medium">
            {props.timeframe}
        </Badge>
        <h5>
            {props.title} -{' '}
            <span className="font-weight-normal">{props.company}</span>
        </h5>
        <p className="font-weight-light">{props.summary}</p>
    </React.Fragment>
)

export default Job
