import PropTypes from 'prop-types';
import './gallerySlider.scss';
import { useEffect, useRef, useState } from 'react';


function GallerySlider (props) {
    if(props.images.length === 0) return console.log('Please add images for the slider to initialise');


    //This will set the default image in the slider. 
    const [index, setIndex] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);

    const slider = useRef(null);
    const buttonNext =  useRef(null);
    const buttonPrev = useRef(null);
    const dots = useRef(null);

    //This will host the setTimeout as a debounce;
    let timer;

    // This will fire on window resize,
    const changeSliderWidth = () => {
        clearTimeout(timer);
        timer = setTimeout(setSliderState, 200);
    };

    const setSliderState = () => setSliderWidth(slider.current.clientWidth);


    const updateSliderImage = (index) => {

        console.log(index * sliderWidth);
        slider.current?.scrollTo({
            top:0,
            left:index * sliderWidth,
            behavior:"smooth",
        });

        setIndex(index);

        if(index === 0){
            buttonPrev.current.classList.add('disabled');
        } else{
            buttonPrev.current.classList.remove('disabled');
        }

        if(index === props.images.length - 1){
            buttonNext.current.classList.add('disabled');
        } else {
            buttonNext.current.classList.remove('disabled');
        }

        dots.current.querySelector('.active')?.classList.remove('active');
        dots.current.querySelectorAll(`button`)[index]?.classList.add('active');
    }



    useEffect(() => {
        if(sliderWidth === 0) setSliderState();
        window.addEventListener('resize', changeSliderWidth);

        return () =>  {
            window.removeEventListener('resize', changeSliderWidth);
        } 


    },[sliderWidth]);

    return (
        <>
        <div class="gallery-group">
            <div className="gallery-slider" ref={slider}>
                <div className="gallery-slider--wrapper">
                    {props.images.map((img, ind) => <div style={{backgroundImage:`url('${img}')`, width:`${sliderWidth}px`}} key={ind}></div> )}
                </div>
                
            </div>
            <button className="gallery-slider--button next" ref={buttonNext} onClick={() => updateSliderImage(index + 1) }></button>
            <button className={`gallery-slider--button prev ${index === 0 ? 'disabled' : ''}`} ref={buttonPrev} onClick = {() => updateSliderImage(index - 1)}></button>

            <div class="gallery-dots" ref={dots}>
                {props.images.map ((i, ind) => <button key={ind} className={ind === 0 ? 'active' : ''} onClick={() => updateSliderImage(ind)}></button>)}
            </div>

        </div>

            
        </>
    )


};

GallerySlider.propTypes = {
    images: PropTypes.array,
}


export default GallerySlider;