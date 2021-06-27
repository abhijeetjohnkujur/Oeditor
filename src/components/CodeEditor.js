import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../css/editor.css'
import resize from '../icons/resize.svg';

import { Controlled as ControlledEditor } from 'react-codemirror2'


const CodeEditor = (props) => {
    const {
        language,
        displayName,
        value,
        onChange
    } = props
    
    const [open, setOpen] = useState(true)

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                { displayName }
                <button 
                type="button"
                onClick={() => setOpen(prevOpen => !prevOpen)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <img src={resize} alt={'resize'} className="" />
                    </button>
            </div>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true
            }}
            />
        </div>
    )
}

export default CodeEditor
