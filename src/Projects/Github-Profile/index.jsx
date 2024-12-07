import { useEffect, useState } from "react";
import "./git.css";
import { FiSearch } from "react-icons/fi";
const GitProfile = () => {
  const [username, setUsername] = useState("RoyalPie");
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUserData() {
    try {
      setLoading(true)
      const res = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json()

      if (data) {
        setLoading(false)
        setUserData(data)
        console.log(data)
      }

    } catch (error) {
      console.log(error);
      setError(error)
      setLoading(false)
    }
  }
  function handleSearch() {
    fetchUserData();
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  console.log(userData);
  return (
    <div className="git-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-username"
          placeholder="Search Github Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FiSearch size={20} className="search-btn" onClick={handleSearch} />
      </div>
      <div className="user-container">
        <img src={userData.avatar_url} alt={userData.login} />
        <a href={userData.html_url}>{userData.name}</a>
        <p>User joined on {new Date('2021-04-27T10:56:17Z').toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})} </p>
      </div>
    </div>
  );
};

export default GitProfile;
