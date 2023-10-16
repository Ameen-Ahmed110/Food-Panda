import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { BsChevronDown } from "react-icons/bs";

const Language = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "EN" ? "ES" : "EN");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const languageOption = [
    { code: "EN", label: "English" },
    { code: "ES", label: "Espanol" },
  ];
  return (
    <>
      <div onClick={toggleDropdown} className="hover:bg-[#fdf2f7] transition duration-150 ease-in-out p-1 h-[34px] relative rounded-md  w-[75px] cursor-pointer flex items-center justify-center gap-2">
        <GrLanguage />
        <button  className="text-[14px]">{currentLanguage}</button>

        {isDropdownVisible && (
            <div className="p-3 block bg-white rounded-md absolute w-[130px] shadow-lg top-9 right--1">
          <ul className=" bg-[#F7F7F7] hover:bg-[#fdf2f7] rounded-md ">
            {languageOption.map((option) => (
              <li key={option.code}>
                <a
                  className="hover:bg-[#f6b2cf] rounded-md block px-4 py-2 text-sm font-semibold transition duration-700 ease-in-out"
                  onClick={() => {
                    setCurrentLanguage(option.code);
                    setDropdownVisible(false);
                  }}
                >
                  {" "}
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
          </div>
        )}
        <BsChevronDown
          
          //   onClick={toggleLanguage}
          className="text-[#e21b70] cursor-pointer"
        />
      </div>
    </>
    //     <div id="language-button" class="language-button relative cursor-pointer">
    //     <span id="current-language" className="pr-1">EN</span>
    //     <span class="arrow-down absolute right-0 top-1/2 transform translate-y-1/2 ">&#9660;</span>
    //     <ul class="language-dropdown hidden absolute right-0 top-7 bg-white p-0 ">
    //       <li className="p-1"><a href="#" data-lang="en">English</a></li>
    //       {/* <li><a href="#" data-lang="es">Español</a></li> */}
    //     </ul>
    //   </div>
  );
};

export default Language;
