import { useEffect, useState } from "react";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
import "./items.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Items = ({ index, item }) =>{

    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(()=>{

        const getMovie = async () => {

            try {

                const res = await axios.get("/movies/find/" +item, {
                    headers: {
                        token: "Ticket "+JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                })

                setMovie(res.data);

            } catch(err) {
                console.log(err);
            }
        }

        getMovie();
    }, [item])

    return(
        <Link to={{ pathname: "/screen", state: { movie: movie }} }>
            <div className="items-wrapper" 
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <img src={movie.thumbnailImg} alt="" />

                {isHovered && (
                    <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="item-info">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="age-limit">+{movie.ageLimit}</span>
                            <span>{movie.release}</span>
                        </div>
                        <div className="desc">
                        {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                    </>
                )}  
            </div>
        </Link>

    )
}

export default Items;