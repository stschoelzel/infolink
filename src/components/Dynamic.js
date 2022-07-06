import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "react-apollo";

const INFOLINK = gql`
  {
    infolinks {
      edges {
        node {
          title
          id
          infolinkMeta {
            what
            where {
              mediaItemUrl
            }
            url
            info
          }
        }
      }
    }
  }
`;


export const Dynamic = () => {
  const { data } = useQuery(INFOLINK);
  const infolinks = data ? formatData(data) : [];

  return infolinks.map(({ what, where, info, url }) => (
    <Infolink what={what} where={where} info={info} url={url} />
  ));
};

const formatData = (data) => {
  return data.infolinks.edges.map((element) => element.node.infolinkMeta);
};

const Infolink = ({ where, what, info, url }) => {
  return (
    <div className="flex flex-wrap m-2 items-center justify-center">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <a href={url}>
          <div className="h-full flex items-top bg-Türkis p-4 rounded-md">
            <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" alt=''
              src={
                where?.mediaItemUrl ||
                "https://infocafe.org/wp-content/uploads/2020/10/cropped-cropped-logo_10-2011-1-2.jpg"
              }
            ></img>
            <div className="flex-grow">
              <h2 className="text-Dunkelblau font-headline">{what}</h2>
              <p className="text-white">{info}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
