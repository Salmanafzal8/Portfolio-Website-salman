function Navbar() {
  return (
    <div>
      <nav className="bg-black font-mono">
        <ul className="flex  text-white justify-end gap-10 items-center p-2 @">
          <li>About me</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <button className="rounded-3xl bg-white text-black p-2 font-bold">
            CONTACT ME
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
