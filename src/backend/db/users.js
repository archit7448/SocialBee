import { getDefaultNormalizer } from "@testing-library/react";
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Archit",
    lastName: "Singh",
    username: "Archit_",
    password: "architSingh123",
    bio: "Aspiring Web developer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654082349/photo_2022-01-09_09-31-16_y3gaoe.jpg",
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Wick",
    username: "Baba_Yaga",
    password: "JohnWick",
    bio: "Wnat to do good deed",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654082242/Richard-JohnWick_sjytto.jpg",
  },
  {
    _id: uuid(),
    firstName: "Harry",
    lastName: "Potter",
    username: "The_Chosen_One",
    password: "HarryPotter",
    bio: "Expecto Patronum",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1656836200/Harry_Potter_character_poster_hwr4lw.jpg",
  },
  {
    _id: uuid(),
    firstName: "Jon",
    lastName: "Snow",
    username: "King_of_North",
    password: "JohnSnow",
    bio: "Winter is coming",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1656836617/fantasy_nosa6s.jpg",
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "Iron_Man",
    password: "TonyStark",
    bio: "Working for avengers",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654083377/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800_jtfr5m.jpg",
  },
  {
    _id: uuid(),
    firstName: "Geralt",
    lastName: "Roger",
    username: "Geralt_Of_Rivia",
    password: "Geralt",
    bio: "Trying to save Ciri",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1654083636/witcher_lmwke3.jpg",
  },
];
