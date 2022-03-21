import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Blogs List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users/">
        <a>User Listing</a>
      </Link>
      <Link href="/adduser">Add User</Link>
    </nav>
  );
};

export default Navbar;
