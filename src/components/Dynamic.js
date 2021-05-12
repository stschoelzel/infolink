import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "react-apollo";

const INFOLINK = gql`
  {
    infolinks {
      edges {
        node {
          infolinkMeta {
            what
            where
            info
          }
        }
      }
    }
  }
`;

const logoUrls = {
  Website: "https://infocafe.org/wp-content/uploads/2020/08/twitch.png",
  Twitch: "https://infocafe.org/wp-content/uploads/2020/08/twitch.png",
  Youtube: "https://infocafe.org/wp-content/uploads/2020/08/twitch.png",
};

export const Dynamic = () => {
  const { data } = useQuery(INFOLINK);
  const infolinks = data ? formatData(data) : [];

  return infolinks.map(({ what, where, info }) => (
    <Infolink what={what} where={where} info={info} />
  ));
};

const formatData = (data) => {
  return data.infolinks.edges.map((element) => element.node.infolinkMeta);
};

const Infolink = ({ where, what, info }) => {
  return (
    <div className="flex flex-wrap m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center bg-blue-100 p-4 rounded-md">
          <img
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={logoUrls[where]}
          ></img>
          <div className="flex-grow">
            <h2 className="text-gray-800 font-bold">{what}</h2>
            <p className="text-gray-600">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
