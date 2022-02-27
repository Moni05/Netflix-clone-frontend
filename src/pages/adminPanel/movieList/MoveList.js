import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../../context/movieContext/apiCalls";
import Topbar from "../../../components/adminPanel/topbar/Topbar";
import Sidebar from "../../../components/adminPanel/sidebar/Sidebar";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "release", headerName: "release", width: 120 },
    { field: "ageLimit", headerName: "ageLimit", width: 120 },
    { field: "isMovie", headerName: "isMovie", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
              <Link
                to={{ pathname: "/admin/movie/" + params.row._id }} state = {{ movie: params.row }}
              >
                <button className="productListView">View</button>
              </Link>
              <Link
                to={{ pathname: "/admin/edit-movie/" + params.row._id }} state = {{ movie: params.row }}
              >
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
          </>
        );
      },
    },
  ];

  return (
    <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <div className="productList">
        <DataGrid
          rows={movies}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(r) => r._id}
        />
      </div>
    </div>
    </>
  );
}