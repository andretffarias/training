import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header>
          <nav style={{display: "flex", gap: "2rem" }}>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/">Home</Link>
          </nav>
        </header>
    )
}