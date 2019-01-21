# FE2-SJD-News

Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website. Think something along the lines of Reddit.

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

This review sprint should consolidate your understanding of making a C.R.U.D application from a front end perspective.

Objectives

Pull together all the front-end skills, technologies and best practises you have learnt.
Make asynchronous API calls to your own server.
Use HTTP request types to interact with your backend, and HTTP response codes to update your UI accordingly.
What to do

Use the generic react-project-checklist as a guide to setting up your app. Here are some project-specific things to bear in mind:

Have a look at your API endpoints and at Reddit. Think about what data you have available, and how you will structure your application. What routes will your application have? What articles will you choose to display on the main page?

Think how you will isolate the concerns of your project - the structure of your components, the sourcing of your data, the styling.

What sort of routing does Reddit use? What sort of specificity do you think you will need? Remember, your urls don't have to directly correspond to your api endpoints, but they will provide some guidance.

Think about what data each component will need. Where will it come from? When should components find their own data and when should they load it themselves? Focus on loading a list of articles for your front page first of all.

Consider more complex functionality: how do you want to allow changes to your database? Think about how you will attribute users to posted comments etc. How will you know what comments/articles a user should be allowed to delete? How about sorting data, or paginating responses? A good starting point would be to pick a single user and assuming that all new articles and comments are being posted by that user.

How are you going to make this a fluid and engaging experience for users, so they want to come back for more?

'Must Have' User Stories

As a user, I should be able to view a list of articles.
As a user, I should be able to view a list of articles on a specific topic.
As a user, I should be able to view an individual article.
As a user, I should be able to view an individual article's comments.
As a user, I should be able to sort articles by:
date created
comment_count
votes
As a hiring partner with no access to my laptop, I should be able to use the site on my mobile without sacrificing style or functionality.
As a user, I should be able to login to the site.
As a hiring partner with no knowledge of the users in the database, it should be very clear to me how I can login to the site.
As a logged in user, I should be able to post a new article to an existing topic.
As a logged in user, I should be able to post a new article to a new topic.
As a logged in user, I should be able to post a new comment to an existing article.
As a logged in user, I should be able to vote on an article.
As a logged in user, I should be able to vote on a comment.
As a logged in user, I should be able to delete my own articles.
As a logged in user, I should be able to delete my own comments.
As a user, I should be able to navigate over pages of articles (e.g. using pagination or infinite scroll).
As a user, I should be able to navigate over pages of comments (e.g. using pagination or infinite scroll).
As a hiring parter, I should be able to follow the readme instructions to easily run the project locally.
As a hiring parter, I should be able to find a link to the hosted version of the project in the readme.
As a hiring parter, I should be able to find a link to the back-end repository of the project in the readme.
As a hiring parter, I should be able to find a link to the hosted version of the back-end project in the readme.
Note regarding BOLD user stories:

Infinite scroll / pagination to be covered in Tuesday's lecture
User login / auth to be covered in Tuesday's lecture
Voting / optimistic rendering to be covered in Wednesday's lecture
Error handling / error pages to be covered in Thursday's lecture
Before moving onto the extra credit section, submit your code for review! Please send a link to both your GitHub project and your hosted version to the FE2 slack channel 😀

Extra credit

Create a route which shows which users have been most active adding articles and comments
Make this route sort the users by how popular they are based on an aggregation of their article and comment vote counts
Implement a filter which re-orders comments based on either the time they were added, or how many votes they have got.
Important

This sprint is among the ones we'll ask you to complete in order to put you forward for jobs. Put a little bit of love into it! :)
