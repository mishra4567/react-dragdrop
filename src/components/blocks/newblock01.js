// src/components/blocks/newBlock01.js
// import videoIcon from "../icons/video.svg";
const newBlock01Svg=`<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="14" height="14" stroke="black" fill="transparent" stroke-width="2"/>
          </svg>`;
const newBlock01 = (editor) => {
    editor.BlockManager.add('one-column-block', {
        id: '',
        label: `1 Column`,
        category: 'Basic',
        media: newBlock01Svg ,
        content: '<div class="row"><div class="cell">1 Column</div></div>',
        activate: true,
    });
};

export default newBlock01;
