import { ILikeDB, IPostDB } from "../../models/Post";
import { IUserDB, USER_ROLES } from "../../models/User";

export const users: IUserDB[] = [
  {
    id: "101",
    name: "Jil Mayumi",
    email: "jil@gmail.com",
    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
    role: USER_ROLES.ADMIN,
  },
  {
    id: "102",
    name: "Mariana Andrade",
    email: "mari@gmail.com",
    password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO",
    role: USER_ROLES.NORMAL,
  },
  {
    id: "103",
    name: "Talita Miguel",
    email: "Tali@gmail.com",
    password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i",
    role: USER_ROLES.NORMAL,
  },
];

export const posts: IPostDB[] = [
  {
    id: "201",
    content: "Hi, I'm new here!",
    user_id: "101",
  },
  {
    id: "202",
    content: "Good morning, family!",
    user_id: "102",
  },
  {
    id: "203",
    content: "Receive!",
    user_id: "103",
  },
];

export const likes: ILikeDB[] = [
  {
    id: "301",
    post_id: "201",
    user_id: "101",
  },
  {
    id: "302",
    post_id: "202",
    user_id: "101",
  },
  {
    id: "303",
    post_id: "203",
    user_id: "101",
  },
  {
    id: "304",
    post_id: "201",
    user_id: "102",
  },
  {
    id: "305",
    post_id: "201",
    user_id: "103",
  },
  {
    id: "306",
    post_id: "202",
    user_id: "103",
  },
];
