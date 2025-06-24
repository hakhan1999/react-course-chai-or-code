import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hakhan1999")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center justify-center flex-col gap-2">
      <p>Github Username : {data.name}</p>
      <p> Github Public Repos Count: {data.public_repos}</p>
      <img src={data.avatar_url} alt="Github Image" />
    </div>
  );
};

export default Github;

export const githubInfoData = async () => {
  const response = await fetch("https://api.github.com/users/hakhan1999");
  return response.json();
};
