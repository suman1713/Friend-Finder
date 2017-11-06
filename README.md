## Friend-Finder
This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## DEMO:
![alt text](https://github.com/suman1713/Friend-Finder/blob/master/app/public/img/friendfinder_demo.gif "Friend Finder Demo")

The app has 10 questions to answer. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
The _server.js_ file should requires the basic npm packages: express, body-parser and path.
The _htmlRoutes.js_ file includes two routes:
1. A GET Route to /survey which  displays the survey page.
2. A default, catch-all route that leads to home.html which displays the home page. 



The apiRoutes.js file should contain two routes:
1. A GET route with the url */api/friends*. It displays a JSON of all possible friends.
2. A POST routes */api/friends*. It handles incoming survey results and the compatibility logic. 



The application's data is stored inside of app/data/friends.js as an array of objects. Each of these objects roughly follows the format below.
```javascript {
  "name":"Suman",
  "photo":"https://assets.goodstatic.com/s3/magazine/others/meta/goodlogosquare.png",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
} 
```


## To determine the user's most compatible friend:
Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example: 
**User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5**

The app uses the absolute value of the differences. Put another way: no negative solutions! Both 5-3 and 3-5 as 2, and so on. 
The closest match will be the user with the least amount of difference.


Once current user's most compatible friend is found, it is displayed as a modal pop-up.


