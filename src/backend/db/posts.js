import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "You Want A War? Or Do You Wanna Just Give Me A Gun?",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Baba_Yaga",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654082242/Richard-JohnWick_sjytto.jpg",
    comments: [
      {
        _id: uuid(),
        username: "The_Chosen_One",
        text: "Wohooo",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Iron_Man",
        text: "John Wick 🔥",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Sometimes you gotta run before you walk.",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Iron_Man",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654083377/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800_jtfr5m.jpg",
    comments: [
      {
        _id: uuid(),
        username: "Geralt_Of_Rivia",
        text: "Deep!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Baba_Yaga",
        text: "Working on something big!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "You can change your whole life trajectory in six months of hard work",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Archit_",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage: undefined,
    comments: [],
  },
  {
    _id: uuid(),
    content: "Eat sleep code repeat",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Archit_",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage: undefined,
    comments: [],
  },
  {
    _id: uuid(),
    content: "React JS at Core!",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Archit_",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage: undefined,
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "If you only trust the people you grew up with ,you won't make many allies",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "King_of_North",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654270137/qiqbom7x7shq4c9drown.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "If I have to choose between one evil and another, then I prefer not to choose at all.",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Geralt_Of_Rivia",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654083636/witcher_lmwke3.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "It does not do to dwell on dreams and forget to live.",
    disabledState: true,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "The_Chosen_One",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    postImage: undefined,
    comments: [],
  },
];
