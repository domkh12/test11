import { FaMoon } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded className="bg-gray-100 ">
      <div className="flex md:order-2 mr-7">
        <FaMoon className="mt-2 mr-5 text-3xl" />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="../public/profile/1.jpg" rounded />
          }
        >
          <Dropdown.Item>
            <FaRegUserCircle className="mr-2"/>
            <Link to="/dashboard/profile">Edit Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <MdOutlineLogout className="mr-2"/>
            <Link to="/logout">Logout</Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Welcome, Amanda</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
