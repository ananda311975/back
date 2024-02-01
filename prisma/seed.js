const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const password = bcrypt.hashSync("123456");
const userData = [
  { username: "andy", password, email: "andy@gmail.com" },
  { username: "bobby", password, email: "bobby@gmail.com" },
  { username: "candy", password, email: "candy@gmail.com" },
];

const todoData = [
  { titie: "Learn HTML", duedate: new Data(), user_id: 7 },
  { titie: "Learn CSS", duedate: new Data(), user_id: 8 },
  { titie: "Learn JS", duedate: new Data(), user_id: 8 },
  { titie: "Learn REACT", duedate: new Data(), user_id: 9 }, //ต้องดู id ของเราเอง
];

const run = async () => {
    await prisma.todo.createMany({
        data : userData
    });
    await prisma.todo.createMany({
        data : todoData
    });

//   await prisma.user.deleteMany({})
//   await prisma.todo.deleteMany({})

};

run();
