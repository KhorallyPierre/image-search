
function ImageShow({ image }) {
    console.log(image, "this is the image url")
    return <div>
        <img src={image.urls.small} alt={image.alt_description}/>
    </div>;
    
}

export default ImageShow;