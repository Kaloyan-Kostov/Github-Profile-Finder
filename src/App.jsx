import { useEffect, useState } from "react";
import User from "./User";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Kaloyan-Kostov");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [buttonColor, setButtonColor] = useState("bg-blue-500");
  const [placeholderText, setPlaceholderText] = useState(
    "Search GitHub Username"
  );

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

        const buttonColors = [
          "bg-gradient-to-r from-yellow-400 to-orange-500",
          "bg-gradient-to-r from-gray-400 to-blue-500",
          "bg-gradient-to-r from-red-400 to-purple-500",
          "bg-gradient-to-r from-purple-400 to-pink-500",
          "bg-gradient-to-r from-green-500 to-cyan-600",
        ];
        const placeholderSuggestions = [
          "Find a GitHub profile...",
          "Enter GitHub username...",
          "Search your favorite coder...",
          "Who's on GitHub?",
          "Lookup a developer...",
        ];

        setButtonColor(
          buttonColors[Math.floor(Math.random() * buttonColors.length)]
        );
        setPlaceholderText(
          placeholderSuggestions[
            Math.floor(Math.random() * placeholderSuggestions.length)
          ]
        );
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

  const backgroundDesigns = [
    "bg-gradient-to-r from-yellow-400 to-orange-500",
    "bg-gradient-to-r from-dark-blue to-dark-blue",
    "bg-gradient-to-r from-purple-400 to-pink-500",
    "bg-gradient-to-r from-green-500 to-cyan-600",
    "bg-gradient-to-r from-red-400 to-purple-500",
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        backgroundDesigns[selectedDesign] || backgroundDesigns[0]
      }`}
    >
      <div className="backdrop-blur-sm bg-white/20 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <form className="flex mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={placeholderText}
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            className="w-full p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button
            type="submit"
            className={`p-3 ${buttonColor} text-white rounded-r-lg hover:opacity-90 transition transform hover:scale-105 duration-300 ease-in-out`}
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
