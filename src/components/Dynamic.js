import React from "react";
import { gql } from "@apollo/client";
//import { useQuery } from "react-apollo";

/**
const INFOLINK = gql"
{ 
  infolinkMeta {
    infolink_what
    infolink_where
    infolink_info
      }
}
"

const linklogo(infolink_where){
  return infolink_where=="Website" : Webs ? infocafelogo.png
  : infolink_where=="Twitch" : Webs ? twitchlogo.png
  : infolink_where=="Youtube" : Webs ? youtubelogo.png
  : plathalter.png;
};

export const Dynamic = (infolink_what, infolink_info, linklogo) => { 
  return (
    <div class="flex flex-wrap m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center bg-blue-100 p-4 rounded-md">
          <img class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="linklogo" ></img>
          <div class="flex-grow">
            <h2 class="text-gray-800 font-bold">infolink_what</h2>
            <p class="text-gray-600">infolink_info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

*/

export const Dynamic = () => {
  return (
    <div class="flex flex-wrap m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center bg-blue-100 p-4 rounded-md">
          <img
            class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://infocafe.org/wp-content/uploads/2020/08/twitch.png"
          ></img>
          <div class="flex-grow">
            <h2 class="text-gray-800 font-bold">Club Digital – Die Daten!?</h2>
            <p class="text-gray-600">website</p>
          </div>
        </div>
      </div>
    </div>
  );
};
