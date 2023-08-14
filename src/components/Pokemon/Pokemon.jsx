// CSS imports
import './Pokemon.css';
import { Link } from 'react-router-dom';
function Pokemon({ name, url, id }) {
    return (
        <Link to={`/pokemon/${id}`} className='pokemon-wrapper'> 
            <div className='pokemon'>
                    <div className='pokemon-name'>{name}</div>
                    <img className='pokemon-image' src={url} />
            </div>
        </Link>

    )
}

export default Pokemon;