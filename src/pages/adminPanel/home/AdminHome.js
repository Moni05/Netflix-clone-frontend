import Chart from "../../../components/adminPanel/chart/Chart";
// import FeaturedInfo from "../../../components/adminPanel/featuredInfo/FeaturedInfo";
import "./adminhome.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import WidgetSm from "../../../components/adminPanel/widgetSm/WidgetSm";
// import WidgetLg from "../../../components/adminPanel/widgetLg/WidgetLg";
import Topbar from "../../../components/adminPanel/topbar/Topbar";
import Sidebar from "../../../components/adminPanel/sidebar/Sidebar";

const BASE_URL = process.env.REACT_APP_URL;

export default function AdminHome() {
  
  const Months = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    
  ]);

  const [userStats, setUserStats] = useState([]);

  useEffect(()=>{

    const getUserStats = async () => {

      try {
        const res = await axios.get(`${BASE_URL}users/stats`,{
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        })

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        
        statsList.map(item => setUserStats(prev => [...prev, { name: Months[item._id-1], "Total Users": item.total }]));
      }
      catch(err){

        console.log(err);

      }
    }

    getUserStats();

  },[])

  console.log(userStats);
  return (
    <>
    <Topbar />
    <div className="container">
      <Sidebar />
      <div className="home">
      {/* <FeaturedInfo /> */}
      <Chart data={userStats} title="User Analytics" grid dataKey="Total Users"/>
      <div className="homeWidgets">
        <WidgetSm/>
        {/* <WidgetLg/> */}
      </div>
    </div>
    </div>
    </>
  );
}