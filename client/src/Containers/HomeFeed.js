import React, { useEffect } from "react";
import { withApollo } from "react-apollo";
import { GET_USER_LIKED } from "./queries";
const HomeFeed = (props) => {
  const client = props.client;
  const user_id = "5f0c89318af80405a4b559b1";
  const display = async () => {
    const { data } = await client.query({
      query: GET_USER_LIKED,
      variables: { user_id },
    });
    console.log(data.getUserLiked[0]);
  };
  useEffect(() => {
    display();
  }, []);
  return (
    <div>
      <ul id="story-list">
        <li>Story from HomeFeed</li>
      </ul>
    </div>
  );
};
export default withApollo(HomeFeed);
