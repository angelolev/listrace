export default function Nav() {
  return (
    <nav className="py-[30px]">
      <div className="container mx-auto flex justify-between ">
        <div className="logo">
          <a className="text-[#1b1e20] font-bold text-[20px]" href="/">
            List <span className="text-primary-500">Race</span>
          </a>
        </div>
        <div className="menu">
          <ul className="flex gap-10">
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                How it works
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Explore
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Review
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-[#859098] uppercase font-medium hover:text-primary-500"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
