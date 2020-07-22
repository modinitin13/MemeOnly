const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = graphql;

const {
  StoryType,
  UserType,
  FollowType,
  UserStoryType,
  MultimediaType,
  StoryMultimediaType,
} = require("../ObjectTypes/ObjectTypes");

// Schemas
const User = require("../../models/User/User");
const Story=require("../../models/Story/Story")
const UserUser=require("../../models/UserUser/UserUser")
const UserStoryLike=require("../../models/UserStory/UserStoryLike")
const Multimedia=require('../../models/Multimedia/Multimedia')
const StoryMultimedia=require('../../models/StoryMultimedia/StoryMultimedia')
// Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getStoryDetails: {
      type: StoryType,
      args: { story_id: { type: GraphQLID } },
      resolve(parent, args) {
        return Story.findById(args.story_id);
      },
    },
    getUserDetails: {
      type: UserType,
      args: { user_id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.user_id);
      },
    },
    getMultimediaDetails: {
      type: MultimediaType,
      args: { multimedia_id: { type: GraphQLID } },
      resolve(parent, args) {
        return Multimedia.findById(args.multimedia_id);
      },
    },
    getUserFollower: {
      type: new GraphQLList(FollowType),
      args: { user_id: { type: GraphQLID } },
      resolve(parent, args) {
        return UserUser.find({ user_id2: args.user_id });
      },
    },
    getUserFollowing: {
      type: new GraphQLList(FollowType),
      args: { user_id: { type: GraphQLID } },
      resolve(parent, args) {
        return UserUser.find({ user_id1: args.user_id });
      },
    },
    getUserLiked: {
      type: new GraphQLList(UserStoryType),
      args: { user_id: { type: GraphQLID } },
      resolve(parent, args) {
        return UserStoryLike.find({ user_id: args.user_id });
      },
    },
    getStoryMultimedia: {
      type: new GraphQLList(StoryMultimediaType),
      args: { story_id: { type: GraphQLID } },
      resolve(parent, args) {
        return StoryMultimedia.find({ story_id: args.story_id });
      },
    },
  },
});

module.exports={
  RootQuery
}