import { RxDashboard } from "react-icons/rx";
import { LuBarChart, LuBox, LuCornerUpLeft, LuDatabase, LuFile, LuLogOut, LuRefreshCcw, LuShoppingBag, LuSmartphone } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlineMap, MdOutlineShuffle } from "react-icons/md";
import { FiBarChart2, FiColumns, FiCopy, FiFileMinus, FiHome, FiMap, FiMinimize2, FiPieChart, FiPlusSquare, FiUser, FiUserCheck } from "react-icons/fi";
import { ImCodepen } from "react-icons/im";
import { GoTag } from "react-icons/go";
import { CiFileOn, CiLogin, CiSpeaker } from "react-icons/ci";
import { FaBars, FaKhanda,  FaRegFileAlt, FaRegSave } from "react-icons/fa";
import { IoCartOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegFileLines } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiCreditCardLight, PiUsersThin } from "react-icons/pi";
import { BsDatabase, BsFileEarmarkMinus, BsShield } from "react-icons/bs";
import { TfiPieChart } from "react-icons/tfi";
import { SlLayers } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    return (

        <>
            <section>
                <div className="pagebody-wrapper">
                    <div className="side-bar">
                        <div className="sidebar-menu">
                            <ul>
                                <li className="submenu-open">
                                    <h6 style={{ fontSize: "14px", marginTop: "0", fontWeight: "500" }}>Main</h6>
                                    <ul>
                                        <li className="active">
                                            <NavLink to="/">
                                                <RxDashboard />
                                                <span>Dashboard</span>
                                            </NavLink>
                                        </li>
                                        <li className="submenu">
                                            <a href="#" className="text-dark">
                                                <LuSmartphone />
                                                <span>Application</span>
                                                <span className="menu-arrow"><MdKeyboardArrowRight /></span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 style={{ fontSize: "14px", marginTop: "0", fontWeight: "500", margin: "15px 0px 0px" }}>Products</h6>
                                    <ul>
                                        <li>
                                            <NavLink to="/ViewProducts">
                                                <LuBox />
                                                <span>Products</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/CreateProducts">
                                                <FiPlusSquare />
                                                <span>Create Product</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <ImCodepen />
                                                <span>Category</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <GoTag />
                                                <span>Brands</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <CiSpeaker />
                                                <span>Speaker</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaBars />
                                                <span>Print Barcode</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FiMinimize2 />
                                                <span>Import Products</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 style={{ fontSize: "14px", marginTop: "0", fontWeight: "500", margin: "15px 0px 0px" }}>Sales</h6>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <IoCartOutline />
                                                <span>Sales</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaRegFileAlt />
                                                <span>Invoices</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FiCopy />
                                                <span>Sales Return</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaRegSave />
                                                <span>Quotation</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaKhanda />
                                                <span>POS</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <MdOutlineShuffle />
                                                <span>Transfer</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <LuCornerUpLeft />
                                                <span>Return</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 style={{ fontSize: "14px", marginTop: "0", fontWeight: "500", margin: "15px 0px 0px" }}>People</h6>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FiUser />
                                                <span>Customers</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <HiOutlineUsers />
                                                <span>Suppliers</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FiUserCheck />
                                                <span>Users</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FiHome />
                                                <span>Stores</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 style={{ fontSize: "14px", marginTop: "0", fontWeight: "500", margin: "15px 0px 0px" }}>Pages</h6>            
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <BsShield />
                                                <span>Authentication</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <BsFileEarmarkMinus />
                                                <span>Error Pages</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FiMap />
                                                <span>Places</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 style={{ fontSize: "14px", marginTop: "0", fontWeight: "500", margin: "15px 0px 0px" }}>Settings</h6>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <IoSettingsOutline />
                                                <span>Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <LuLogOut />
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}
export default Sidebar;