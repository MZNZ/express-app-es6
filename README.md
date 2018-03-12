## Movie Catalog

### Scenario

You are an avid movie collector and have had a lifelong dream of compiling the greatest ensemble of movies known to man; however, your collection is too extensive for any human to scan through manually.

### Task

Your task is to demonstrate your skill by designing and implementing single page app for a movie catalog.

#### Features
1. **SEARCH:** The catalog should allow you to search movies by name.
1. **FILTER:** The catalog should allow you to filter by genre

At EquitySim, we are using a combination of **React/Redux** to build out our frontend but you may use any build tools and frontend framework/templating language to accomplish the task.

**TIP:** Keep extensibility in mind when architecting your code, to allow new features to be added.

### Getting Started

For this task you will need:

1. [Node](https://github.com/nodejs/node) (>= 6.0.0)
1. [NPM](https://www.npmjs.com/)

In order to request for the movie data, you will need to run the node server that is included in this package. By default, the command to do this is:

```
$ npm start
```

Once the server is up, you may make a GET request for the data by hitting `http://localhost:3000/api/movies`.

You can expect the data to be in the following JSON format:
```
[
    ...
    {
        "title": "The Lion King",
        "year": 1994,
        "director": "Rob Minkoff",
        "cast": "(voices) Jonathan Taylor Thomas, Matthew Broderick, Jeremy Irons, James Earl Jones, Whoopi Goldberg, Moira Kelly, Nathan Lane",
        "genre": "Animated",
        "notes": "2 Academy Awards; Golden Globe Best Picture Musical or Comedy"
    },
    ...
]
```
