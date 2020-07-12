# reddit-top

## Decisions

When I started the project I set as a goal to finish it during the time I had available during the weekend. To acomplish this, I decided to install a component that takes care of the swipe functionality for the drawer so I could focus on other functionality.

There are many improvements that can be done, I think one of the best improvements for this kind of app is to virtualize the list, and also make the "Post" component functional so it's more performant.

Also since this is a very small project, I haven't spent too much time worring on how to organize CSS, I just used the SFC method with BEM for selector naming conventions.

I didn't want to bloat the project with libraries like moment.js or lodash so I made a utils folder with some methods that get the job done.

Finally, I used vuex as state manager to centralize there the data and acomplish two things: use the library `vuex-persistedstate` to persist key data (posts read and dismissed) and to avoid passing too many events/data through components.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
