const graphql = require("graphql");
const _ = require("lodash");
const { identity } = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = graphql;

// Dummy data
const Story = [
  {
    story_id: "1",
    story_caption: "Rover on his way",
    story_likes: 55,
    story_category: "Dank",
    story_is_single: true,
    story_author_id: "1",
    story_created_at: "2020",
  },
  {
    story_id: "2",
    story_caption: "Naa dare na",
    story_likes: 155,
    story_category: "Humor",
    story_is_single: false,
    story_author_id: "2",
    story_created_at: "2019",
  },
];

const User = [
  {
    user_id: "1",
    user_name: "Nitin",
    user_email: "modi.nitin13@gmail.com",
    user_password: "zxcvbnm",
    user_followers: 455,
    user_following: 200,
    user_handle: "modi.nitin13",
  },
  {
    user_id: "2",
    user_name: "Gourav",
    user_email: "modi.Gourav3@gmail.com",
    user_password: "zaeefrdthm",
    user_followers: 555,
    user_following: 100,
    user_handle: "modi.gourav3",
  },
];

const UserUser = [
  { user_id1: "1", user_id2: "2" },
  { user_id1: "1", user_id2: "3" },
  { user_id1: "1", user_id2: "4" },
  { user_id1: "1", user_id2: "5" },
  { user_id1: "2", user_id2: "1" },
  { user_id1: "2", user_id2: "4" },
  { user_id1: "2", user_id2: "3" },
  { user_id1: "2", user_id2: "5" },
  { user_id1: "3", user_id2: "2" },
  { user_id1: "3", user_id2: "5" },
];
// Object type
const StoryType = new GraphQLObjectType({
  name: "Story",
  fields: () => ({
    story_id: { type: GraphQLID },
    story_caption: { type: GraphQLString },
    story_likes: { type: GraphQLInt },
    story_category: { type: GraphQLString },
    story_is_single: { type: GraphQLBoolean },
    story_author_id: { type: GraphQLID },
    story_created_at: { type: GraphQLString },
    story_user: {
      type: UserType,
      resolve(parent, args) {
        return _.find(User, { user_id: parent.story_author_id });
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    user_id: { type: GraphQLID },
    user_name: { type: GraphQLString },
    user_email: { type: GraphQLString },
    user_password: { type: GraphQLString },
    user_followers: { type: GraphQLInt },
    user_following: { type: GraphQLInt },
    user_handle: { type: GraphQLString },
    user_image: { type: GraphQLID },
  }),
});

const FollowType = new GraphQLObjectType({
  name: "Follow",
  fields: () => ({
    user_id1: { type: GraphQLID },
    user_id2: { type: GraphQLID },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getStoryDetails: {
      type: StoryType,
      args: { story_id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(Story, { story_id: args.story_id });
      },
    },
    getUserDetails: {
      type: UserType,
      args: { user_id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(User, { user_id: args.user_id });
      },
    },
    getUserFollower: {
      type: new GraphQLList(FollowType),
      args: { user_id1: { type: GraphQLID } },
      resolve(parent, args) {
        return _.filter(UserUser, { user_id1: args.user_id1 });
      },
    },
    getUserFollowing: {
      type: new GraphQLList(FollowType),
      args: { user_id2: { type: GraphQLID } },
      resolve(parent, args) {
        return _.filter(UserUser, { user_id2: args.user_id2 });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
