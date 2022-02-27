import "./menu.scss";
//pass menuOpen and setMenuOpen 
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        
      <li onClick={()=>setMenuOpen(false)}>
          <a  href="/">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a  href="/products">Products</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/resources">Resources</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a  >Register</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a >Sign In</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a >Contact</a>
        </li>
      </ul>
    </div>
  );
}
