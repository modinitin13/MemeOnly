const graphql = require("graphql");
const _ = require("lodash");
const {
  Story,
  User,
  UserUser,
  UserStory,
  Multimedia,
  StoryMultimedia,
} = require("../DummyData/DummyData");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
} = graphql;

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
    story_author: {
      type: UserType,
      resolve(parent, args) {
        return _.find(User, { user_id: parent.story_author_id });
      },
    },
    story_liker:{
      type:UserType,
      resolve(parent,args){
        return StoryUser.find({})
      }
    }
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

const UserStoryType = new GraphQLObjectType({
  name: "UserStory",
  fields: () => ({
    user_id: { type: GraphQLID },
    story_id: { type: GraphQLID },
  }),
});

const MultimediaType = new GraphQLObjectType({
  name: "Multimedia",
  fields: () => ({
    multimedia_id: { type: GraphQLID },
    multimedia_type: { type: GraphQLString },
    multimedia_url: { type: GraphQLString },
  }),
});

const StoryMultimediaType = new GraphQLObjectType({
  name: "StoryMultimedia",
  fields: () => ({
    story_id: { type: GraphQLID },
    multimedia_id: { type: GraphQLID },
    multimedia: {
      type: MultimediaType,
      resolve(parent, args) {
        return _.find(Multimedia, { multimedia_id: parent.multimedia_id });
      },
    },
  }),
});

module.exports = {
  StoryType,
  UserType,
  FollowType,
  UserStoryType,
  MultimediaType,
  StoryMultimediaType
};
