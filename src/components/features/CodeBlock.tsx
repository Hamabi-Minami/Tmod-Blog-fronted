import React, {useState, useEffect, useRef} from 'react';
import {Grid} from "@mui/material";
import 'highlight.js/styles/default.css';
import 'highlight.js/lib/common';
import hljs from 'highlight.js';

interface LayoutProps {
    language: string;
    codes: string;
}

const CodeBlock: React.FC<LayoutProps> = ({ language, codes}) => {
    const codeRef = useRef(null);
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <pre style={{border: "2px solid yellow", fontSize: "12px", maxHeight: "400px", overflow: "auto", scrollbarWidth: "none"}}>
              <code className={`language-${language}}`}>
                {codes}
              </code>
        </pre>
    )

}

export default CodeBlock;