import React from 'react'
import Tool from '../../models/tool'

export const ToolBox: React.FC<Tool> = props => (
    <div className="tool-box">
        <div className="tool-name">{props.name}</div>
        {/* Replace <p> with <div> if it contains other divs */}
        <div className="tool-description">
            {props.description}
        </div>
    </div>
)

export default ToolBox
