import React, {useState} from 'react'
import ImageViewer from "react-simple-image-viewer";



//component
import PhotoCollection from '../../Components/restaurant/PhotosCollection'

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/reviews_photos/542/5bf9d692024e8cf17ecc50598c096542_1625660558.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/5ad/892d7f0ae78eafe088dc34269cd0d5ad_1625660629.JPG",
        "https://b.zmtcdn.com/data/reviews_photos/628/e0048a6c264a585eb3b40deb44a47628_1625660622.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/0ca/2a8d3707ff2fbcd5ba792c1d42b490ca_1622318160.jpg"]);
     const [isMenuopen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
           {isMenuopen && (
        <ImageViewer
          src={photos}
          currentIndex={ CurrentImg }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
      <div className="flex flex-wrap gap-2">
            {
                photos.map((photo) => 
                <PhotoCollection 
                image={photo}
                openViewer={openViewer}
                />)
            }
        </div>
        </>
    )
}

export default Photos
