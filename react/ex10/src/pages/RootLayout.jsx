import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout pricipal. Abaixo está o conteúdo dinamico de cada
          rota.
        </p>
        <hr />
        <Outlet />
      </main>
      <hr />
      <footer>
        <p>Feito com React Router DOM.</p>
      </footer>
    </>
  );
}
