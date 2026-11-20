import { useState } from "react";
import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

function App() {
  const [totalLikes, setTotalLikes] = useState(0);
  return (
    <>
      <Navbar totalLikes={totalLikes} />
      <main>
        <Outlet context={{ sumarLike: () => setTotalLikes((t) => t + 1) }} />
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        © 2026 Mi Cafetería
      </footer>
    </>
  );
}

export default App;