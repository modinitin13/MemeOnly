import gql from "graphql-tag";
export const GET_USER_LIKED = gql`
  query GET_USER_LIKED($user_id: ID!) {
    getUserLiked(user_id: $user_id) {
      user_id
      story_id
    }
  }
`;
