import React from "react";

const DesignOne = ({ user }) => (
  <div className="flex p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto hover:shadow-xl transition-shadow duration-300">
    <img
      src={user.avatar_url}
      alt="GitHub Avatar"
      className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mr-6"
    />
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">
        {user.name ? user.name : user.login}
      </h2>
      <p className="text-gray-500">{user.bio ? user.bio : "GitHub User"}</p>
      <div className="mt-4 space-y-1">
        <p className="text-gray-700">
          <strong>Followers:</strong> {user.followers}
        </p>
        <p className="text-gray-700">
          <strong>Following:</strong> {user.following}
        </p>
      </div>
      <a
        href={user.html_url}
        className="mt-4 inline-block text-orange-600 hover:underline transform hover:scale-105 hover:text-yellow-400 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub Profile
      </a>
    </div>
  </div>
);

const DesignTwo = ({ user }) => (
  <div className="relative p-8 bg-gray-900 text-white rounded-xl shadow-lg max-w-sm mx-auto ">
    <div className="flex justify-center">
      <img
        src={user.avatar_url}
        alt="GitHub Avatar"
        className="w-20 h-20 rounded-full border-4 border-gray-700 object-cover"
      />
    </div>
    <h2 className="mt-4 text-center text-xl font-semibold">
      {user.name ? user.name : user.login}
    </h2>
    <p className="text-center text-gray-400">
      {user.bio ? user.bio : "GitHub User"}
    </p>
    <div className="absolute top-4 right-4 flex flex-col items-center">
      <p className="text-sm">Followers</p>
      <p className="text-lg font-bold">{user.followers}</p>
    </div>
    <div className="absolute bottom-4 right-4 flex flex-col items-center">
      <p className="text-sm">Following</p>
      <p className="text-lg font-bold">{user.following}</p>
    </div>
    <div className="mt-6 flex justify-center">
      <a
        href={user.html_url}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition bg-gradient-to-r from-yellow-400 to-orange-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  </div>
);

const DesignThree = ({ user }) => (
  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md p-6 max-w-lg mx-auto">
    <div className="absolute top-0 right-0 h-full w-full bg-white opacity-40 rounded-lg"></div>
    <div className="relative flex flex-col items-center p-4 bg-white rounded-xl shadow-lg z-10">
      <img
        src={user.avatar_url}
        alt="GitHub Avatar"
        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        {user.name ? user.name : user.login}
      </h2>
      <p className="text-gray-600">{user.bio ? user.bio : "GitHub User"}</p>
      <div className="flex justify-between w-full mt-4">
        <p className="text-gray-700">
          <strong>Followers:</strong> {user.followers}
        </p>
        <p className="text-gray-700">
          <strong>Following:</strong> {user.following}
        </p>
      </div>
      <a
        href={user.html_url}
        className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transform hover:scale-105 transition bg-gradient-to-r to-purple-500 from-gray-400 "
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub Profile
      </a>
    </div>
  </div>
);

const DesignFour = ({ user }) => (
  <div className="flex bg-white rounded-xl shadow-md max-w-lg mx-auto overflow-hidden">
    <div className="w-1/3 bg-gradient-to-t from-green-500 to-cyan-500 p-4 text-white flex flex-col justify-center">
      <p className="text-center text-sm">Followers</p>
      <p className="text-center text-2xl font-bold">{user.followers}</p>
      <hr className="my-2 border-gray-400" />
      <p className="text-center text-sm">Following</p>
      <p className="text-center text-2xl font-bold">{user.following}</p>
    </div>
    <div className="w-2/3 p-6">
      <img
        src={user.avatar_url}
        alt="GitHub Avatar"
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mx-auto"
      />
      <h2 className="mt-4 text-center text-xl font-semibold text-gray-900">
        {user.name ? user.name : user.login}
      </h2>
      <p className="text-center text-gray-600">
        {user.bio ? user.bio : "GitHub User"}
      </p>
      <a
        href={user.html_url}
        className="mt-6 block text-center text-white px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition bg-gradient-to-r to-green-500 from-cyan-600,
"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  </div>
);

const DesignFive = ({ user }) => (
  <div className="flex flex-col sm:flex-row bg-gray-50 p-6 rounded-lg shadow-lg max-w-lg mx-auto hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center sm:justify-start sm:w-1/3">
      <img
        src={user.avatar_url}
        alt="GitHub Avatar"
        className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-gray-200"
      />
    </div>
    <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
      <h2 className="text-2xl font-bold text-gray-800">
        {user.name ? user.name : user.login}
      </h2>
      <p className="text-gray-600">{user.bio ? user.bio : "GitHub User"}</p>
      <div className="mt-4 flex justify-between">
        <p className="text-gray-700">
          <strong>Followers:</strong> {user.followers}
        </p>
        <p className="text-gray-700">
          <strong>Following:</strong> {user.following}
        </p>
      </div>
      <a
        href={user.html_url}
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition bg-gradient-to-r from-purple-400 to-pink-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  </div>
);

const User = ({ user, selectedDesign }) => {
  const designs = [DesignOne, DesignTwo, DesignThree, DesignFour, DesignFive];
  const SelectedDesign = designs[selectedDesign];
  return <SelectedDesign user={user} />;
};

export default User;
