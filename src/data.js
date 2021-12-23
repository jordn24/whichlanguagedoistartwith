const data = [
    {
      text: "Why Do You Want to Learn to Code?",
      iD: 0,
      choices: [
        {text: "To get a developer job", nextQuestionId: 1},
        {text: "To make cool stuff", nextQuestionId: 2},
        {text: "To learn a new skill", nextQuestionId: 3},
      ]
    },
    {
      text: "What 9-5 Slave Job Do You Want?",
      iD: 1,
      choices: [
        {text: "Data", nextQuestionId: 6},
        {text: "Game", nextQuestionId: 7},
        {text: "Web", nextQuestionId:8},
        {text: "Cloud", nextQuestionId: 9},
      ]
    },
    {
      text: "What Kind of Cool Stuff tho",
      iD: 2,
      choices: [
        {text: "AI", nextQuestionId: 9},
        {text: "Games", nextQuestionId: 7},
        {text: "Mobile Apps", nextQuestionId: 4},
        {text: "Websites", nextQuestionId: 5},
      ]
    },
    {
      text: "Be More Specific",
      iD: 3,
      choices: [
        {text: "I want to make Mobile Apps", nextQuestionId: 4},
        {text: "I want to make Websites", nextQuestionId: 8},
        {text: "I want to make AI", nextQuestionId: 9},
      ]
    },
    {
      text: "Which Mobile Platform?",
      iD: 4,
      choices: [
        {text: "IOS", nextQuestionId: 10},
        {text: "Android", nextQuestionId: 11},
      ]
    },
    {
      text: "Do you Prefer Design or Logic?",
      iD: 5,
      choices: [
        {text: "Design", nextQuestionId: 12},
        {text: "Logic", nextQuestionId: 13},
      ]
    },
    {
      text: "R",
      iD: 6,
      description: "R is a widely used statistical programming language that’s beloved by users in academia and industry. R works well with data, making it a great language for anyone interested in data analysis, data visualization, and data science.",
    },
    {
      text: "C# or C++",
      iD: 7,
      description: "\
      C# and Unity are the tools that most beginners will start to use as they are easy to learn. \
      C++ and Unreal Engine are another option. Unreal Engine is not very beginner-friendly, meaning that people need more advanced programming skills to use it."
    },
    {
      text: "HTML/CSS/Javascript",
      iD: 8,
      description: "HTML is the foundation of all web pages. It defines the structure of a page, while CSS defines its style. JavaScript is responsible for everything else, including search engines, ecommerce, content management systems, responsive design, social media and phone apps."
    },
    {
      text: "Python",
      iD: 9,
      description: "Python is an interpreted high-level general-purpose programming language. It offers great libraries and frameworks for AI and Machine Learning (ML). They offer computational capabilities, statistical calculations, scientific computing, and much more."
    },
    {
      text: "Swift",
      iD: 10,
      description: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. It is the only language that can be used to develop IOS applications."
    },
    {
      text: "Kotlin/Java",
      iD: 11,
      description: "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java. It is the most popular way to develop Android applications."
    },
    {
      text: "HTML/CSS -> Bootstrap",
      iD: 12,
      description: "HTML is the foundation of all web pages. It defines the structure of a page, while CSS defines its style. \
      Bootstrap is a framework to help you design websites faster and easier. "
    },
    {
      text: "Javascript",
      iD: 13,
      description: "Backend developers use a type of JavaScript called Node. js for backend work. The Node. js framework allows a developer to handle data updates from the front end and build scalable network applications able to process many simultaneous user requests, amongst other things. Popular backend frameworks are: NodeJS, ExpressJS, NextJS and GatsbyJS"
    },
  ];
  
  export default data;