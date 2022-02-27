import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import Topbar from "../../../components/adminPanel/topbar/Topbar";
import Sidebar from "../../../components/adminPanel/sidebar/Sidebar";

export default function Movie() {

  const location = useLocation();
  const { movie } = location.state;

  return (
    <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Movie</h1>
          <Link to="/admin/newmovie">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={movie.thumbnailImg} alt="" className="productInfoImg" />
              <span className="productName">{movie.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{movie._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">genre:</span>
                <span className="productInfoValue">{movie.genre}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">year:</span>
                <span className="productInfoValue">{movie.release}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">limit:</span>
                <span className="productInfoValue">{movie.ageLimit}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Movie Title</label>
              <input type="text" placeholder={movie.title} />
              <label>Year</label>
              <input type="text" placeholder={movie.release} />
              <label>Genre</label>
              <input type="text" placeholder={movie.genre} />
              <label>Limit</label>
              <input type="text" placeholder={movie.ageLimit} />
              <label>Trailer</label>
              <input type="file" placeholder={movie.trailer} />
              <label>Video</label>
              <input type="file" placeholder={movie.video} />
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img
                  src={movie.image}
                  alt=""
                  className="productUploadImg"
                />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}