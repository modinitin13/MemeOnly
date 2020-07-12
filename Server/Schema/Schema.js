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
} = graphql;

const {
  StoryType,
  UserType,
  FollowType,
  LikeType,
  MultimediaType,
  StoryMultimediaType
} = require("./ObjectTypes/ObjectTypes");

const {
    Story,
    User,
    UserUser,
    UserStory,
    Multimedia,
    StoryMultimedia
} = require('./DummyData/DummyData')

// Query
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
    getMultimediaDetails:{
        type:MultimediaType,
        args:{multimedia_id:{type:GraphQLID}},
        resolve(parent,args){
            return _.find(Multimedia,{multimedia_id:args.multimedia_id})
        }
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
    getUserLiked:{
        type:new GraphQLList(LikeType),
        args:{user_id:{type:GraphQLID}},
        resolve(parent,args){
            return _.filter(UserStory,{user_id:args.user_id})
        }
    },
    getStoryMultimedia:{
        type:new GraphQLList(StoryMultimediaType),
        args:{story_id:{type:GraphQLID}},
        resolve(parent,args){
            return _.filter(StoryMultimedia,{story_id:args.story_id})
        }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
