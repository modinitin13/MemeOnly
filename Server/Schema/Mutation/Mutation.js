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
  UserStoryType,
  FollowType,
  MultimediaType,
  StoryMultimediaType,
} = require("../ObjectTypes/ObjectTypes");
const User = require("../../models/User/User");
const Story = require("../../models/Story/Story");
const UserStoryLike = require("../../models/UserStory/UserStoryLike");
const UserUser = require("../../models/UserUser/UserUser");

// Mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUserDetails: {
      type: UserType,
      args: {
        user_name: { type: new GraphQLNonNull(GraphQLString) },
        user_email: { type: new GraphQLNonNull(GraphQLString) },
        user_password: { type: new GraphQLNonNull(GraphQLString) },
        user_followers: { type: new GraphQLNonNull(GraphQLInt) },
        user_following: { type: new GraphQLNonNull(GraphQLInt) },
        user_handle: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return new User({
          user_name: args.user_name,
          user_email: args.user_email,
          user_password: args.user_password,
          user_followers: args.user_followers,
          user_following: args.user_following,
          user_handle: args.user_handle,
        }).save();
      },
    },
    addStoryDetails: {
      type: StoryType,
      args: {
        story_caption: { type: new GraphQLNonNull(GraphQLString) },
        story_likes: { type: new GraphQLNonNull(GraphQLInt) },
        story_category: { type: new GraphQLNonNull(GraphQLString) },
        story_is_single: { type: new GraphQLNonNull(GraphQLBoolean) },
        story_author_id: { type: new GraphQLNonNull(GraphQLString) },
        story_created_at: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return new Story({
          story_caption: args.story_caption,
          story_likes: args.story_likes,
          story_category: args.story_category,
          story_is_single: args.story_is_single,
          story_author_id: args.story_author_id,
          story_created_at: args.story_created_at,
        }).save();
      },
    },
    addLike: {
      type: UserStoryType,
      args: {
        user_id: { type: new GraphQLNonNull(GraphQLID) },
        story_id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Story.findByIdAndUpdate(
          args.story_id,
          { $inc: { story_likes: 1 } },
          function (err, docs) {
            if (err) {
            } else {
            }
          }
        );
        return new UserStoryLike({
          user_id: args.user_id,
          story_id: args.story_id,
        }).save();
      },
    },
    deleteLike: {
      type: UserStoryType,
      args: {
        user_id: { type: new GraphQLNonNull(GraphQLID) },
        story_id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Story.findByIdAndUpdate(
          args.story_id,
          { $inc: { story_likes: -1 } },
          function (err, docs) {
            if (err) {
            } else {
            }
          }
        );
        return UserStoryLike.findOneAndDelete({
          user_id: args.user_id,
          story_id: args.story_id,
        });
      },
    },
    addFollow: {
      type: FollowType,
      args: {
        user_id1: { type: GraphQLID },
        user_id2: { type: GraphQLID },
      },
      resolve(parent, args) {
        User.findByIdAndUpdate(
          args.user_id1,
          { $inc: { user_following: 1 } },
          function (err, docs) {
            if (err) {
            } else {
            }
          }
        );
        User.findByIdAndUpdate(
          args.user_id2,
          { $inc: { user_followers: 1 } },
          function (err, docs) {
            if (err) {
            } else {
            }
          }
        );
        return UserUser({
          user_id1: args.user_id1,
          user_id2: args.user_id2,
        }).save();
      },
    },
    deleteFollow: {
      type: FollowType,
      args: {
        user_id1: { type: GraphQLID },
        user_id2: { type: GraphQLID },
      },
      resolve(parent, args) {
        User.findByIdAndUpdate(
          args.user_id1,
          { $inc: { user_following: -1 } },
          function (err, docs) {
            if (err) {
            } else {
            }
          }
        );
        User.findByIdAndUpdate(
          args.user_id2,
          { $inc: { user_followers: -1 } },
          function (err, docs) {
            if (err) {
            } else {
            }
          }
        );
        return UserUser.findOneAndDelete({
          user_id1: args.user_id1,
          user_id2: args.user_id2,
        });
      },
    },
  },
});

module.exports = {
  Mutation,
};
