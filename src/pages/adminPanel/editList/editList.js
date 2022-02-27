import { useContext, useEffect, useState } from "react";
import "./editlist.css";
import { getMovies } from "../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { ListContext } from "../../../context/listContext/ListContext";
import { updateList } from "../../../context/listContext/apiCalls";
import { useNavigate, useLocation } from "react-router-dom";
import Topbar from "../../../components/adminPanel/topbar/Topbar";
import Sidebar from "../../../components/adminPanel/sidebar/Sidebar";

export default function EditList() {

    const location = useLocation();
    const { list } = location.state;
    const id = list._id;
    console.log(list);


//   const [list, setList] = useState(null);
  const navigate = useNavigate()

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    // const value = e.target.value;
    // setList({ ...list, [e.target.name]: value });
  };

  // const handleSelect = (e) => {
  //   let value = Array.from(e.target.selectedOptions, (option) => option.value);
  //   // setList({ ...list, [e.target.name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = { title, genre, content, type}
    updateList(id, list, dispatch);
    navigate("/admin/lists");
  };

  useEffect(() => {

    if(list){
        setTitle(list.title);
        setContent(list.content);
        setGenre(list.genre);
        setType(list.type);
    }

  },[list])

  return (
    <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <div className="newProduct">
      <h1 className="addProductTitle">Edit List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={(e) => setType(e.target.value)} value={type}>
              <option>Type</option>
              <option value="movies">Movies</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        {/* <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              value={content}
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div> */}
        <button className="addProductButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
    </div>
    </>
  );
}