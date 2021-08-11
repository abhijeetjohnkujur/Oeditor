import React, {  useEffect } from 'react'
import CE from '../components/CodeEditor'
import '../css/editor.css'
import useLocalStorage from '../hooks/useLocalStorage'

const TextEditor = () => {
    const [html, setHtml] = useLocalStorage('html','')
    const [css, setCss] = useLocalStorage('css','')
    const [js, setJs] = useLocalStorage('js','')
    const [srcDoc, setSrcDoc] = useLocalStorage('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
            `)
        },250)

        return () => clearTimeout(timeout)
    }, [html,css,js])
    
    
    
    return (
        <>
            <div className="pane top-pane">
                <CE language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <CE language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <CE language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>

            <div className="output">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl">OUTPUT</button>
            </div>

            <div className="pane border-2 border-gray-200 mt-4  ds bg-white iframediv">
                <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameborder="0"
               
                />
            </div>
        </>
    )
}

export default TextEditor
