import { NavLink } from "react-router";
import logo from "../routes/images/logo.png"

export default function Navbar() {
  return (
    <>
      <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a
                className="link text-base-content link-neutral text-xl font-bold no-underline"
                href="#"
              >
               <img src={logo} className="w-30 lg:w-60" alt="" />
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="collapse-toggle btn btn-primary rounded-none font-bold btn-md btn-square"
                  data-collapse="#navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden  size-6"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden  size-6"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            id="navbar-collapse"
            className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
          >
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li>
              <NavLink
      to={"/"}
      className={({ isActive }) =>
        `
        px-4 py-2 rounded-md transition-colors
        ${
          isActive
            ? "text-primary font-semibold border-b-2 border-primary rounded-none"
            : "text-gray-500 hover:text-primary"
        }
        `
      }
    >
      Ana Sayfa
    </NavLink>
              </li>
              <li>
              <NavLink
      to={"/about"}
      className={({ isActive }) =>
        `
        px-4 py-2 rounded-md transition-colors
        ${
          isActive
            ? "text-primary font-semibold border-b-2 border-primary rounded-none"
            : "text-gray-500 hover:text-primary"
        }
        `
      }
    >
      Hakkımızda
    </NavLink>
              </li>
              <li>
              <NavLink
      to={"/contact"}
      className={({ isActive }) =>
        `
        px-4 py-2 rounded-md transition-colors
        ${
          isActive
            ? "text-primary font-semibold border-b-2 border-primary rounded-none"
            : "text-gray-500 hover:text-primary"
        }
        `
      }
    >
      İletişim
    </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
