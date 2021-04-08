# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer:
  An instance variable is a variable that is specific to classes in Ruby.  It can be created without needing to be initialized by a method.  It can then be called by methods later in the class.  It is passed down to all instances of the class.

  Researched answer:
  Instance variables are defined with an @ sign within an object.  Each instance variable is specific to the instance of the class it's in.  You cannot call an instance variable outside of the object.  They are defined in the class, and then belong separately to each independent object.


2. What is a block in Ruby?

  Your answer:
  A block in Ruby is the Ruby equivalent of a function in javascript.  It is a section of code that can be called as many times as necessary.

  Researched answer:
  A block in Ruby is the Ruby equivalent of a loop in javascript.  It is an iterable section of code.  Different block methods iterate for different intervals and do different things to the data within.  Blocks are defined by a do/end.  "do" starts the block, and "end" stops it.


3. Ruby has an implicit return. What does that mean?

  Your answer:
  An implicit return is a Ruby term for blocks and methods always returning the last line of code before the end without needing to write return.  The return is implied in the code without having to be explicitly stated.

  Researched answer:
  An implicit return means the last line of a method is automatically returned without the need of the word return before it.


4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  Object-oriented programming treats everything as objects.  It allows for more compartmentalized code sections that are combined together rather than one continuous program.

  Researched answer:
  Object-oriented programming revolves around the use of objects to store data and behavior in the form of variables and methods respectively.  Object-oriented programming allows for the compartmentalization of code that can be edited without damaging the rest of the program.


5. What is the difference between a class and an object?

  Your answer:
  A class is the blueprint for an object.  Objects are specific instances of a class.

  Researched answer:
  Classes define the data and behavior of an object, while an object contains the specific instance of the class.


6. STRETCH: What is `attr_accessor`?

  Your answer:
  attr_accessor allows you to get and set variables in an object without needing to write get and set methods in the class.

  Researched answer:
  attr_accessor is a shortcut to retrieve and set instance variables outside of a class without needing to write methods to do this.


## Looking Ahead: Terms for Next Week
- MVC
  MVC stands for model-view-controller.  This is a software design pattern where the user uses the controller, the controller manipulates the model, the model updates the view, and the user sees the view.
- PostgreSQL
  PostgreSQL is a language used for communicating with databases.  PostgreSQL is a specific version of SQL that focuses on object-oriented programming.
- API
  API stands for application programming interface.  It is a packet of raw data that can be accessed and used by other websites.
- CRUD
  CRUD stands for create, read, update, and delete.  It is the four basic operations for persistent data.
- Ruby on Rails
  Ruby on Rails is a server-side web application written in Ruby.  It is used to create web apps.  It is an MVC framework, and it provides default structures for a database, a web service, and web pages.
- ORM
  ORM stands for Object Relational Mapping.  It allows you to use object-oriented programming languages to convert data between incompatible systems.
- Active Record
  Active Record is a specific Rails ORM.  It lets you interact with data stored in a database as a Ruby object.
