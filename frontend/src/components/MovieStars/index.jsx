import {ReactComponent as StarFull} from 'C:/ProjetosP/dsmovie/frontend/src/assets/img/star-full.svg';
import {ReactComponent as StarHalf} from 'C:/ProjetosP/dsmovie/frontend/src/assets/img/star-half.svg';
import {ReactComponent as StarEmpty} from 'C:/ProjetosP/dsmovie/frontend/src/assets/img/star-empty.svg';
import './styles.css';
function MovieStars() {

    return (

        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>

    );
}

export default MovieStars;