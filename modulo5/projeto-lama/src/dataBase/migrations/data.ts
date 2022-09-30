import { IShowDB, ITicketDB } from "../../models/Show";
import { IUserDB, USER_ROLES } from "../../models/User";

export const users: IUserDB[] = [
  {
    id: "101",
    name: "Mari Andrade",
    email: "mari@gmail.com",
    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
    role: USER_ROLES.ADMIN,
  },
  {
    id: "102",
    name: "Jil Mayumi",
    email: "jil@gmail.com",
    password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO",
    role: USER_ROLES.NORMAL,
  },
  {
    id: "103",
    name: "Talita Miguel",
    email: "tali@gmail.com",
    password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i",
    role: USER_ROLES.NORMAL,
  },
];

export const shows: IShowDB[] = [
  {
    id: "201",
    band: "Foo Fighters",
    starts_at: new Date("2022/12/05"),
    tickets: 5000,
  },
  {
    id: "202",
    band: "System of a Down",
    starts_at: new Date("2022/12/06"),
    tickets: 5000,
  },
  {
    id: "203",
    band: "Evanescence",
    starts_at: new Date("2022/12/07"),
    tickets: 5000,
  },
];

export const tickets: ITicketDB[] = [
  {
    id: "301",
    show_id: "201",
    user_id: "101",
  },
  {
    id: "302",
    show_id: "202",
    user_id: "101",
  },
  {
    id: "303",
    show_id: "203",
    user_id: "101",
  },
  {
    id: "304",
    show_id: "201",
    user_id: "102",
  },
  {
    id: "305",
    show_id: "201",
    user_id: "102",
  },
  {
    id: "306",
    show_id: "202",
    user_id: "103",
  },
];
