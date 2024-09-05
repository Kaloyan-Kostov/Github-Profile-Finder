import { useEffect, useState } from "react";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Kaloyan-Kostov");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(true);
    }
    console.log(data);
  };

  const handleSubmit = () => {};

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="github-profile-container">
      <div className="input wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default GithubProfileFinder;
