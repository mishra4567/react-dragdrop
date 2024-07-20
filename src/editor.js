import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import "./styles/main.scss";
import VideoBlock from "./components/blocks/VideoBlock";
import ImageBlock from "./components/blocks/ImageBlock";
import TextBlock from "./components/blocks/TextBlock";
import LinkBlock from "./components/blocks/link-block"


const Editor = () => {
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [gjsPresetWebpage],
            pluginsOpts: {
                gjsPresetWebpage: {},
            },
            blockManager: {
                blocks: [],
            },
        });
        // Add custom video block
        VideoBlock(editor);
        ImageBlock(editor);
        TextBlock(editor);
        LinkBlock(editor);
        
        setEditor(editor);
    }, []);
    return (
        <div className="App">
            <div id="editor"></div>
        </div>
    );
};

export default Editor;