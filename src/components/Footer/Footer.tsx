export default function Footer() {
  return (
    <footer className="container mx-auto max-w-6xl px-6 py-[45px]">
      <div className="flex flex-wrap items-center md:justify-between">
        <div className="logo">
          <a className="text-[#1b1e20] font-bold text-[20px]" href="/">
            List <span className="text-primary-500">Race</span>
          </a>
        </div>
        <ul className="flex flex-wrap w-full gap-6 pt-4 pb-4 md:w-fit md:gap-6 md:flex-row">
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
    </footer>
  );
}
