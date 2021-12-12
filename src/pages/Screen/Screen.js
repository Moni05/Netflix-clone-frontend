import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";
import "./screen.scss";

export default function Screen() {

  const location = useLocation();
  console.log(location);

  return (
    <div className="screen">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://vod-progressive.akamaized.net/exp=1638033952~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=98fbe9c34e680402b0b92b30cea0af6f48ba7c5c524d2e0910026f403415666f/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4"
      />
    </div>
  );
}