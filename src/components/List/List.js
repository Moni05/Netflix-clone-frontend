import "./list.scss";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import Items from "../Items/Items";
import { useRef, useState } from "react";

const List = ({ list }) => {


    const listRef = useRef();
    const [isMoved, setIsMoved] = useState(false);

    const [tileNumber, setTileNumber] = useState(0);

    const handleClick = (direction) => {

        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === "left" && tileNumber > 0) {
            setTileNumber(tileNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if (direction === "right" && tileNumber < 5) {
            setTileNumber(tileNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return(
        <div className="list-container">
            <span className="listTitle">{list.title}</span>
            <div className="list-wrapper">
                <ArrowBackIosOutlined className="slider left" onClick={()=>handleClick("left")} style={{ display: !isMoved && "none" }}/>
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <Items index={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className="slider right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}

export default List;