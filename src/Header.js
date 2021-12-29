import React from "react";
import "./Header.css";
import logo from "./images/bruma-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header h-[60px] flex items-center bg-[#000000] sticky top-0 z-50">
      <Link to="/">
        <img
          className="header_logo w-[85px] object-contain mx-[20px] my-0"
          src={logo}
        />
      </Link>
      <div className="header_search flex flex-[1] items-center rounded-[24px]">
        <input
          className="header_searchInput h-[12px] p-[10px] border-none w-full border-0 box-content"
          type="text"
        />
        <SearchIcon className="header_searchIcon p-[5px] bg-[#20ACE8] box-content" />
      </div>
      <div className="header_nav flex justify-evenly">
        <div className="header_option flex flex-col mx-[10px] text-white">
          <span className="header_optionLineOne text-[10px]">Hello user</span>
          <span className="header_optionLineTwo text-[13px] font-extrabold">
            Sign in
          </span>
        </div>
        <div className="header_option flex flex-col mx-[10px] text-white">
          <span className="header_optionLineOne text-[10px]">Returns</span>
          <span className="header_optionLineTwo text-[13px] font-extrabold">
            & orders
          </span>
        </div>
        <div className="header_option flex flex-col mx-[10px] text-white">
          <span className="header_optionLineOne text-[10px]">Your</span>
          <span className="header_optionLineTwo text-[13px] font-extrabold">
            Prime
          </span>
        </div>
        <div className="header_optionBasket flex items-center text-white">
          <AddShoppingCartIcon />
          <span className="header_optionLineTwo header_basketCount mx-[10px] text-[13px] font-extrabold">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
