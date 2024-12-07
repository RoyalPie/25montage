import { useEffect } from "react";
import { useState } from "react";

const AutoComplete = () => {
  const [searchParam, setSearchParam] = useState();
  const [userData, setUserData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [showDropdown, setShowDropdown] = useState(false);
  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query)
    if (query.length > 1) {
      const filterData =
        userData && userData.length
          ? userData.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredData(filterData);
      setShowDropdown(true);
    } else setShowDropdown(false);
  }
  async function fetchUserData() {
    try {
      const res = await fetch(`https://dummyjson.com/users`);
      const data = await res.json();

      if (data && data.users && data.users.length > 0) {
        setUserData(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick(e) {
    setSearchParam(e.target.innerText);
    setShowDropdown(false)
    setFilteredData([])
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  console.log(filteredData);
  console.log(userData);
  return (
    <div className="input-container">
      <input
        type="text"
        name="search-username"
        placeholder="Search Username"
        value={searchParam}
        onChange={handleChange}
      />
      <ul className="recommed">
        {filteredData &&
          showDropdown &&
          filteredData
            .filter((user) => user)
            .map((user, index) => (
              <li key={index} onClick={handleClick}>
                {user}
              </li>
            ))}
      </ul>
    </div>
  );
};
export default AutoComplete;
