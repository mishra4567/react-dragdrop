// src/components/blocks/ImageBlock.js
const ImageSvg = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
</svg>`;
const ImageBlock = (editor) => {
    editor.BlockManager.add('image-block', {
        id: 'image',
        label: 'Image',
        category: 'Basic',
        media: ImageSvg,
        activate: true,
        content: { type: 'image' }
    });
};

export default ImageBlock;
