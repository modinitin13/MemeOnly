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

const Multimedia = [
  {
    multimedia_id: "1",
    multimedia_type: "IMAGE",
    multimedia_url:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.insider.com%2F5ea9887b0fc63978b759c857%3Fwidth%3D1100%26format%3Djpeg%26auto%3Dwebp&imgrefurl=https%3A%2F%2Fwww.businessinsider.com%2Fmemes-artificial-intelligence-technology-deepfake-imgflip-meme-does-not-exist-2020-4&tbnid=aKnKv0zHYWuOuM&vet=12ahUKEwi0jObLt8jqAhXS_TgGHaoyDsoQMygBegUIARClAQ..i&docid=u-3VNq8pgtRCJM&w=1100&h=825&q=meme%20images&ved=2ahUKEwi0jObLt8jqAhXS_TgGHaoyDsoQMygBegUIARClAQ",
  },
  {
    multimedia_id: "2",
    multimedia_type: "IMAGE",
    multimedia_url:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.hindustantimes.com%2Frf%2Fimage_size_1200x900%2FHT%2Fp2%2F2020%2F03%2F10%2FPictures%2F_05fd89fc-6287-11ea-9f9f-cfbcf00f9318.PNG&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Fit-s-viral%2Fholi-2020-do-me-a-favour-let-s-not-play-relatable-memes-if-you-re-not-into-the-festival-of-colours%2Fstory-s66PPsM8PLKVSHfOtkvbyH.html&tbnid=RFwRbt9Q6jVhVM&vet=12ahUKEwi0jObLt8jqAhXS_TgGHaoyDsoQMygEegUIARCrAQ..i&docid=DrkUuURrOZBm-M&w=1200&h=675&q=meme%20images&ved=2ahUKEwi0jObLt8jqAhXS_TgGHaoyDsoQMygEegUIARCrAQ",
  },
  {
    multimedia_id: "3",
    multimedia_type: "IMAGE",
    multimedia_url:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.hindustantimes.com%2Ftech%2Frf%2Fimage_size_960x540%2FHT%2Fp2%2F2019%2F01%2F19%2FPictures%2Fworld-cup-2014_93fd67ec-1bd2-11e9-b190-a6170a1d34c9.jpg&imgrefurl=https%3A%2F%2Ftech.hindustantimes.com%2Ftech%2Fnews%2Ffacebook-wants-to-make-memes-safe-for-kids-with-lol-app-story-rl8blSUzVpScrVXi6ZwKhM.html&tbnid=l6s8xEaIyJ4keM&vet=12ahUKEwi0jObLt8jqAhXS_TgGHaoyDsoQMygKegUIARC4AQ..i&docid=jH2TMgriU3lH1M&w=960&h=540&q=meme%20images&ved=2ahUKEwi0jObLt8jqAhXS_TgGHaoyDsoQMygKegUIARC4AQ",
  },
  { multimedia_id: "4", multimedia_type: "IMAGE", multimedia_url: "xyz" },
  { multimedia_id: "5", multimedia_type: "IMAGE", multimedia_url: "xyz" },
  { multimedia_id: "6", multimedia_type: "IMAGE", multimedia_url: "xyz" },
  { multimedia_id: "7", multimedia_type: "IMAGE", multimedia_url: "xyz" },
  { multimedia_id: "8", multimedia_type: "IMAGE", multimedia_url: "xyz" },
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

const UserStory = [
  { user_id: "1", story_id: "1" },
  { user_id: "2", story_id: "1" },
  { user_id: "3", story_id: "1" },
  { user_id: "4", story_id: "1" },
  { user_id: "1", story_id: "2" },
  { user_id: "2", story_id: "2" },
  { user_id: "3", story_id: "2" },
  { user_id: "4", story_id: "2" },
  { user_id: "1", story_id: "3" },
  { user_id: "2", story_id: "3" },
  { user_id: "3", story_id: "3" },
  { user_id: "4", story_id: "3" },
];

const StoryMultimedia = [
  { story_id: "1", multimedia_id: "1" },
  { story_id: "2", multimedia_id: "2" },
  { story_id: "2", multimedia_id: "3" },
  { story_id: "2", multimedia_id: "4" },
  { story_id: "3", multimedia_id: "5" },
  { story_id: "3", multimedia_id: "6" },
  { story_id: "3", multimedia_id: "7" },
  { story_id: "4", multimedia_id: "8" },
];

module.exports = {
  Story,
  User,
  UserUser,
  UserStory,
  StoryMultimedia,
  Multimedia,
};
