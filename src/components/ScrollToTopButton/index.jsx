import '../../App.css'
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToTopButton() {

    function handleClick(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
       <FaArrowCircleUp onClick={handleClick} className='fixed bottom-2 right-4 text-red-400 text-[40px] p-2 cursor-pointer hover:text-red-500 '> 
      </FaArrowCircleUp>
    )
}

export default ScrollToTopButton