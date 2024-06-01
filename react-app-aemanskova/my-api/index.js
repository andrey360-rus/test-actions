const express = require("express");
const cors = require("cors");

const path = require("path"); // Add this line
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const posts = [
  {
    id: 1,
    shortText: "How I Learned to Find Joy in the Moment",
    longText:
      "MindfulLife taught me to appreciate every moment. Through mindfulness practices, I learned to find joy in simple things - the smell of coffee, the warmth of sunlight. It changed my perspective on life.",
    userAvatar: "./src/img/bear.png",
    postImage: "./src/img/apiimg1.jpg",
  },
  {
    id: 2,
    shortText: "Emotional Flexibility through Meditation",
    longText:
      "Using MindfulLife, I mastered techniques of emotional flexibility. Now I better understand my feelings and can react more flexibly to life situations. It's like learning a new language, but for emotions!",
    userAvatar: "./src/img/chicken.png",
    postImage: "./src/img/apiimg2.jpg",
  },
  {
    id: 1,
    shortText: "How to Distract Yourself from Problems",
    longText:
      "In the app, there is a link to a board with the most popular live stickers that are updated every day. It instantly lifts your mood and distracts from everyday routine!",
    userAvatar: "./src/img/dinosaur.png",
    postImage: "./src/img/apiimg3.jpg",
  },
  {
    id: 2,
    shortText: "My Daily Savior",
    longText:
      "This app has become my faithful companion in dealing with everyday stresses. Every day, a new way to find peace and harmony is discovered. Delightful!",
    userAvatar: "./src/img/girl.png",
    postImage: "./src/img/apiimg4.jpg",
  },
  {
    id: 1,
    shortText: "Sponsor of My Serenity",
    longText:
      "MindfulLife has revolutionized my perception of meditation. Beautiful interface, unique practices, and incredible results. An excellent way to find inner peace.",
    userAvatar: "./src/img/teacher.png",
    postImage: "./src/img/apiimg5.jpg",
  },
  {
    id: 2,
    shortText: "Recipe for Self-Care Success",
    longText:
      "As I implemented MindfulLife practices, I noticed positive changes not only in emotional but also physical well-being. Regular meditations helped me improve sleep quality and increase energy. It's like magic self-care.",
    userAvatar: "./src/img/womann.png",
    postImage: "./src/img/apiimg6.jpg",
  },
  {
    id: 1,
    shortText: "Success Story: How I Found Inner Balance",
    longText:
      "MindfulLife has been a guide for me in the search for inner balance. I used to constantly run, facing difficulties. Now, thanks to mindfulness practices, I have found a way not only to overcome challenges but also to remain calm and balanced in the process.",
    userAvatar: "./src/img/woman.png",
    postImage: "./src/img/apiimg7.jpg",
  },
];

app.get("/api/posts", (req, res) => {
  res.header("Content-Type", "application/json");
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});