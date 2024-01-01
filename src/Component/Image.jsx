import './image.css'
import { Link } from 'react-router-dom';
function Image({ image ,id }) {
    return (
        <div className='bird'>

            <Link to={`/image/${id}`}>
                <img className="bird-img" src={image} />
            </Link>

        </div>
    )
}
export default Image;