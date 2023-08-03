import collage_image from '../images/AirBnb_Experiences.png';

function Hero(){
    return(
        <section className='hero'>
            <img src={collage_image} className='hero--photo' alt='hero collage' />
            <h1 className='hero--header'> Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home.</p>
        </section>
    )
}

export default Hero;