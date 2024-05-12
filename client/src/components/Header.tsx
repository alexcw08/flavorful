export const Header = () => {
  return (
    <header className="navbar px-0 md:px-4  justify-between">
      <div>
        <a className="btn btn-ghost text-lg md:text-xl ml-2 md:ml-0">
          Flavorful
        </a>
      </div>
      <ul className="w-1/2 flex justify-center gap-8 md:gap-0 md:menu md:menu-horizontal ">
        <li>
          <a href="">Home</a>
        </li>
        <li className="disabled">
          <a href="">Recipes</a>
        </li>
        <li className="disabled">
          <a href="">Nutrition</a>
        </li>
      </ul>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-2 "
          >
            <div className="w-10 rounded-full">
              <img
                alt=""
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
