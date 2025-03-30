import '../../App.css';
import banner from './imgBanner.jpg';

function Banner(){
    return(
        <div   className='mt-[60px] w-full h-[300px] bg-cover bg-center sm:h-[280px] lg:h-[380px]'
        style={{ backgroundImage: `url(${banner})` }}>
             
        </div>

    )
}

export default Banner;