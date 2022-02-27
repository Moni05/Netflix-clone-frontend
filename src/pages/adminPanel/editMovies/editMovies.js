import { useContext, useEffect, useState } from "react";
import "./editMovies.css";
import storage from "../../../firebase";
import { updateMovie } from "../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import Topbar from "../../../components/adminPanel/topbar/Topbar";
import Sidebar from "../../../components/adminPanel/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export default function EditMovies() {

    const location = useLocation();
    var { movie } = location.state;
    const id = movie._id;
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [titleImg, setTitleImg] = useState(null);
    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);
    const [genre, setGenre ] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [release, setRelease] = useState();
    const [length, setLength] = useState();
    const [ageLimit, setAgeLimit] = useState();
    const [isMovie, setIsMovie] = useState(false);
    const [movies, setMovies] = useState(movie);

    const { dispatch } = useContext(MovieContext);

    const handleChange = (e) => {
        // const value = e.target.value;
        // setMovie({ ...movie, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach((item) => {
            console.log(item.label);
        const fileName = new Date().getTime() + item.label + item.file.name;
        const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            },
            (error) => {
            console.log(error);
            },
            () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {

                setMovies((prev) => {
                return { ...prev, [item.label]: url, title, desc, length, genre, release, ageLimit, isMovie} ;
                });

                setUploaded((prev) => prev + 1);
            });
            }
        );
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
        { file: image, label: "image" },
        { file: titleImg, label: "titleImg" },
        { file: thumbnailImg, label: "thumbnailImg" },
        { file: trailer, label: "trailer" },
        { file: video, label: "video" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovie(id, movies, dispatch);
        navigate("/admin/movies");
    };

    useEffect(() => {

        if(movies){

            setImage(movies.image)
            setThumbnailImg(movies.thumbnailImg)
            setTitleImg(movies.titleImg)
            setTrailer(movies.trailer)
            setVideo(movies.video)
            setTitle(movies.title);
            setDesc(movies.desc);
            setLength(movies.length);
            setGenre(movies.genre);
            setRelease(movies.release);
            setAgeLimit(movies.ageLimit);
            setIsMovie(movies.isMovie);
        }

    },[movies])

    return (
        <>
        <Topbar />
        <div className="container">
        <Sidebar />
        <div className="newProduct">
        <h1 className="addProductTitle">Edit Movie</h1>
        <form className="addProductForm">
            <div className="addProductItem">
            <label>Image</label>
            <img src={image} alt="" className="productUploadImg" />
            <label htmlFor="image">
                <Publish />
            </label>
            <input type="file" id="image" style={{ display: "none" }} onChange={(e) => setImage(e.target.files[0])}/>
            <p>* Mandatory to re-upload the file</p>
            </div>
            <div className="addProductItem">
            <label>Title image</label>
            <img src={titleImg} alt="" className="productUploadImg" />
            <label htmlFor="titleImg">
                <Publish />
            </label>
            <input type="file" id="titleImg" style={{ display: "none" }} onChange={(e) => setTitleImg(e.target.files[0])}/>
            <p>* Mandatory to re-upload the file</p>
            </div>
            <div className="addProductItem">
            <label>Thumbnail image</label>
            <img src={thumbnailImg} alt="" className="productUploadImg" />
            <label htmlFor="thumbnailImg">
                <Publish />
            </label>
            <input type="file" id="thumbnailImg" style={{ display: "none" }} onChange={(e) => setThumbnailImg(e.target.files[0])}/>
            <p>* Mandatory to re-upload the file</p>
            </div>
            <div className="addProductItem">
            <label>Title</label>
            <input
                type="text"
                placeholder="John Wick"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label>Description</label>
            <input
                type="text"
                placeholder="description"
                value={desc}
                name="desc"
                onChange={(e) => setDesc(e.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label>Release</label>
            <input
                type="text"
                placeholder="Release"
                name="release"
                value={release}
                onChange={(e) => setRelease(e.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label>Genre</label>
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                name="genre"
                onChange={(e) => setGenre(e.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label>Duration</label>
            <input
                type="text"
                placeholder="Duration"
                value={length}
                name="length"
                onChange={(e) => setLength(e.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label>Limit</label>
            <input
                type="text"
                placeholder="limit"
                name="ageLimit"
                value={ageLimit}
                onChange={(e) => setAgeLimit(e.target.value)}
            />
            </div>
            <div className="addProductItem">
            <label>Is Movie?</label>
            <select name="isMovie" id="isMovie" onChange={(e) => setIsMovie(e.target.value)} value={isMovie}>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
            </div>
            <div className="addProductItem">
            <label>Trailer</label>
            <video src={trailer} />
            <label htmlFor="trailer">
                <Publish />
            </label>
            <input type="file" id="trailer" style={{ display: "none" }} onChange={(e) => setTrailer(e.target.files[0])}/>
            <p>* Mandatory to re-upload the file</p>
            </div>
            <div className="addProductItem">
            <label>Video</label>
            <video src={video} />
            <label htmlFor="video">
                <Publish />
            </label>
            <input type="file" id="video" style={{ display: "none" }} onChange={(e) => setVideo(e.target.files[0])}/>
            <p>* Mandatory to re-upload the file</p>
            </div>
            {uploaded === 5 ? (
            <button className="addProductButton" onClick={handleSubmit}>
                Create
            </button>
            ) : (
            <button className="addProductButton" onClick={handleUpload}>
                Upload
            </button>
            )}
        </form>
        </div>
        </div>
        </>
    );
}