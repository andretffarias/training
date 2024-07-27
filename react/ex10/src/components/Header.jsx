import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header>
          <nav style={{display: "flex", gap: "2rem" }}>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/products">Products</Link>
          </nav>
        </header>
    )
}