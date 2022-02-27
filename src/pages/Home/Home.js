import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Features from "../../components/Features/Features";
import List from "../../components/List/List";
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = process.env.REACT_APP_URL;

const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    console.log(type);

    useEffect(() => {

        const getRandomLists = async () => {
          try {
              
            const res = await axios.get(
              `${BASE_URL}lists${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : "" }`,
              {
                headers: {
                  token: "Ticket "+JSON.parse(localStorage.getItem("user")).accessToken,
              }
            }
            );
            setLists(res.data);
            console.log(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getRandomLists();
      }, [type, genre]);

    return(
        <div className="home">
            <Navbar />
            <Features type={type} setGenre={setGenre} />
            {lists.map((list) => ( <List list={list} /> ))}
        </div>
    )

}

export default Home;