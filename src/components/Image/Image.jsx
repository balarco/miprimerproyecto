const MyImage = ({ imgurl, imgalt }) => {
    const imageStyle = {
        width: '150px', // Set desired width
        height: '150px', // Set desired height
        objectFit: 'cover' // Ensure the image covers the area without distortion
    };

    return (
        <img src={imgurl} alt={imgalt} style={imageStyle} />
    );
}

export default MyImage;