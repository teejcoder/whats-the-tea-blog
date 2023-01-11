import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./sidebar.css";

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3000/images/"

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])


  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="topImg" src={PF + user.profilePic} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum?</p>
        </div>
        <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        </div>
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
    </div>
  )
}
