import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./features.scss";

const BASE_URL = process.env.REACT_APP_URL

const Features = ({type, setGenre }) => {

    const [show, setShow] = useState({});

    useEffect(()=>{

        const getRandomShow = async () => {

            try {

                const res = await axios.get(`${BASE_URL}movies/random?type=${type}`, {
                    headers: {
                        token: "Ticket "+JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });

                setShow(res.data[0]);

            } catch(err) {
                console.log(err);
            }
        }
        getRandomShow();
    },[type])

    console.log(show);
    return(
        <div className="featured-section">

            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies": "TV Shows"}</span>
                    <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)} >
                        <option>Genres</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img width="100%" src={show.image} alt="" />

            <div className="featured-information">

                <img 
                src={show.titleImg} 
                alt="" />

                <span className="description">{show.desc}</span>

                <div className="options">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more-info">
                        <InfoOutlined />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Features;