import { useEffect, useRef, useState } from "react";
import './SearchBar.css';
import { motion } from "framer-motion";

const SearchBar = ({ handleFilterText }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    if (isSearchVisible) searchRef.current.focus();
  }, [isSearchVisible])

  const handleSearchClick = () => {
    setIsSearchVisible((prevVal) => !prevVal)
  }

  const handleInputChange = (e) => {
    handleFilterText(e.target.value)
  }

  return (

    <div className="search-container">
      {isSearchVisible ?
        <>
          <motion.div className="searchBar">
            <motion.input
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
              className="searchBar-input" ref={searchRef}
              type="text" onChange={handleInputChange}></motion.input>
          </motion.div>
          <motion.button whileHover={{ rotate: 180 }} animate={{ rotate: [180, 0] }} className="search-button" type="button" onClick={handleSearchClick}>
            <i class="fa fa-times" />
          </motion.button>
        </>
        :
        <motion.button whileHover={{ scale: 1.1 }} className="search-button" type="button" onClick={handleSearchClick}>
          <i className="fa fa-search" />
        </motion.button>
      }
    </div>
  )
}

export default SearchBar;