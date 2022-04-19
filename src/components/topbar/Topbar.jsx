import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen , setMenuOpen}) {
  return (
    <div className={"topbar  " + (menuOpen && "active")}>
     <div className="wrapper">
      <div className="left">
      <style>
    @import url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');
      </style>
      <a href="#intro" className="logo"> Wabi-Sabi.</a>
      <div className="itemContainer">
     <Person className="icon"/>
      <span> +251-920663440 </span>
-     </div>

      <div className="itemContainer">
      <Mail className="icon"/>
      <span> Yabserabera@gmail.com </span>
-     </div>
      </div>
      
      <div className="right">
        <div className="hamburger" on onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
      </div>
    </div>
  )
}
