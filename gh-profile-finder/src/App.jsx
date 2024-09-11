import { useEffect, useState } from "react";
import User from "./User";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Kaloyan-Kostov");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(null);

  const fetchUserData = async () => {
    if (!userName) {
      setError("Please enter a GitHub username.");
      return;
    }
    setError("");
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (res.status === 404) {
        setError("User not found.");
        setUserData(null);
      } else {
        setUserData(data);
        setSelectedDesign(Math.floor(Math.random() * 5));
        setUserName("");
      }
    } catch (err) {
      setError("Failed to fetch user data.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-green-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          GitHub Profile Finder
        </h1>
        <form className="flex mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search GitHub Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            className="w-full p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition transform hover:scale-105  duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {userData !== null ? (
          <User user={userData} selectedDesign={selectedDesign} />
        ) : null}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
