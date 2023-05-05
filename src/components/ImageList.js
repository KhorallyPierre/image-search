import ImageShow from "./ImageShow";
import './ImageList.css'

function ImageList({images}) {
    // anytime we run a mapping function (or any method on an arra) a key prop is needed on the return element
    // the key prop needs to be on the top most element
    const renderedImages = images.map((image)=> {
        return <ImageShow key={image.id} image={image}/>
    });
    return <div className="image-list"> {renderedImages} </div>
}

export default ImageList