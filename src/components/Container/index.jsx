import '../../App.css';

function Container({ children }) {
    return (
        <div className="flex-grow  bg-black">
            {children}
        </div>
    );
}

export default Container;

