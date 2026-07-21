import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-800 shadow-lg px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-400">
        ECO-AIR
      </h1>

      {/* Navigation */}
      <div className="flex gap-8 text-white font-medium">

        <Link
          to="/"
          className="hover:text-green-400 transition duration-300"
        >
          Dashboard
        </Link>

        <Link
          to="/map"
          className="hover:text-green-400 transition duration-300"
        >
          Map
        </Link>

        <Link
          to="/prediction"
          className="hover:text-green-400 transition duration-300"
        >
          Prediction
        </Link>

        <Link
          to="/health"
          className="hover:text-green-400 transition duration-300"
        >
          Health
        </Link>

        <Link
          to="/admin"
          className="hover:text-green-400 transition duration-300"
        >
          Admin
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;