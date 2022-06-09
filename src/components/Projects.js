import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import commercial1 from '../images/adfa-accomodation-upgrade.jpg'
import commercial2 from '../images/GMB-Botswana-photos-012_credit.jpg'
import commercial3 from '../images/Website-Treasury-1.jpg'
import commercial4 from '../images/RMC-Duntroon-heritage-works.jpg'
import commercial5 from '../images/GMB-Botswana-photos-022_credit.jpg'
import catering1 from '../images/Me-&-Mrs-Jones.jpg'
import catering2 from '../images/Public_02.jpg'
import catering3 from '../images/_MG_4389-Bellucis.jpg'
import commercial1_1 from '../images/adfa-accomodation-upgrade _1.jpg'
import commercial2_1 from '../images/GMB-Botswana-photos-012_credit _1.jpg'
import commercial3_1 from '../images/Website-Treasury-1 _1.jpg'
import commercial4_1 from '../images/RMC-Duntroon-heritage-works _1.jpg'
import commercial5_1 from '../images/GMB-Botswana-photos-022_credit _1.jpg'
import catering1_1 from '../images/Me-&-Mrs-Jones _1.jpg'
import catering2_1 from '../images/Public_02 _1.jpg'
import catering3_1 from '../images/_MG_4389-Bellucis _1.jpg'
import '../styles/style.css';

function Projects() {

    let allImages = [{url:commercial1, id:0}, {url:commercial2, id:1}, {url:commercial3, id:2}, {url:commercial4, id:3}, {url:commercial5, id:4}, {url:catering1, id:5}, {url:catering2, id:6}, {url:catering3, id:7}];
    let detailImages = [{url:commercial1_1, id:0}, {url:commercial2_1, id:1}, {url:commercial3_1, id:2}, {url:commercial4_1, id:3}, {url:commercial5_1, id:4}, {url:catering1_1, id:5}, {url:catering2_1, id:6}, {url:catering3_1, id:7}];
    let commercialImages = [{url:commercial1, id:0}, {url:commercial2, id:1}, {url:commercial3, id:2}, {url:commercial4, id:3}, {url:commercial5, id:4}];
    let cateringImages = [{url:catering1, id:5}, {url:catering2, id:6}, {url:catering3, id:7}];

    const [images, setImages] = useState(allImages);
    const [currImage, setCurrImage] = useState(1);

    const setAll = () => {
        setImages(allImages);
    }

    const setCommercial = () => {
        setImages(commercialImages);
    }

    const setCatering = () => {
        setImages(cateringImages);
    }

    const showDetail = (e) => {
        document.getElementById('cboxOverlay').style.display = 'block';
        document.getElementById('imagebox').style.display = 'block';
        setCurrImage(parseInt(e.target.parentNode.children[0].id))
    }

    const hideDetail = () => {
        document.getElementById('cboxOverlay').style.display = 'none';
        document.getElementById('imagebox').style.display = 'none';
    }

    const nextImage = () => {
        let temp = currImage + 1;
        if(temp > 7) {
            temp = 0;
        }
        setCurrImage(temp);
    }

    return (
        <div>
            <Header />
            <div className='projects'>
                <h1>PROJECTS</h1>
                <div className='btn-group'>
                    <button className='submit-btn sub-btn' onClick={setAll}>ALL</button>
                    <button className='submit-btn sub-btn' onClick={setCommercial}>COMMERCIAL</button>
                    <button className='submit-btn sub-btn' onClick={setCatering}>CATERING</button>
                </div>
                <div className='project-images row'>
                    {images && images.map(imageItem => {
                        return (
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 image-item'>
                                <p onClick={showDetail}>
                                    <img src={imageItem.url} id={imageItem.id} alt="" />
                                    <div className="overlay" />
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
            <TopButton />
            <div id="cboxOverlay" onClick={hideDetail}/>
            <div id='imagebox'>
                <img src={detailImages[currImage].url} alt="" onClick={nextImage} />
            </div>
        </div>    
    );
}

export default Projects;