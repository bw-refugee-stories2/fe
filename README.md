# Refugee Stories 
### PITCH
People visiting the site will gain a better understanding of the refugee crisis and what it means to be a refugee. There are more people displaced in the world today than at any time since the end of World War II and it is more important than ever to help people develop empathy for each other.

### MVP
Home Page - Contains a carousel of 3 sets of pictures and highlighted quotes from recently posted stories with a read more button, linked to full story.

Login Page - After an admin logs in, they'll be directed to a page of recently submitted stories. Here they can click approve and the story will appear on the stories page, or reject and it will be deleted.

Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.Tabs should include about us, submit your story, stories, and connect (if you choose to do the stretch goal).

Stories Page: Contains a grid of all recently submitted stories.

Submit Your Story Page : Clicking add story brings up a page with a self contained form where a user can add their story. Clicking submit adds the story to a que for the admin to review.

### STRETCH
Create a connect page that shows a google map to show the nearest refugee organizations near you to volunteer with.

## Daily Schedule and Goals:
### Friday
- [ ]  Discover who your team and assigned TL are and get into a Slack Channel organized by your Project Lead.
- [ ]  Complete the Ice Breaker activity and submit the Ice Breaker Wrap Up form.
- [ ]  Make sure you are proactive joining your team's Github org and Trello Board that is created by your assigned TL.
- [ ]  If your team has a UX designer, they will lead the team in a meeting about the features/design of your product
- [ ]  Make a copy of the [linked canvas](https://www.notion.so/lambdaschool/Product-Vision-bcc33f41ecc94cd395ebdbb4504b1f23) and work together as a team to fill it out.
- [ ]  iOS Developers must set up App Store Connect by Monday. Please carefully read and follow the [Lambda App Store Connect Guide](https://github.com/LambdaSchool/ios-app-store-connect-guide).
- [ ]  Please find time to do this before Monday morning and get a link to this product canvas into the front end README and pin it to your Slack Channel.
### Monday
- [ ]  Use React and front end styling platforms such as Material UI, Reactstrap, or something like Styled-Components chosen and implemented as your technology choice (to be done and listed during your additions to the Product Canvas)
- [ ]  Front end is pulling in some data from backend
- [ ]  User Login/Signup Pages built and ready to handle the token being sent between backend and front end
- [ ]  React app and Backend App talking to one another, focus on CORS issues
### Tuesday
- [ ]  80% of Front end features & UI Components, built and consuming data from the backend (Functionality over form for now)
### Wednesday
#### Most work on adding new features should be suspended at the end of the day to allow your team to focus on *quality improvement*, *user experience,* and *bug fixes*. Changes to requirements and design may occur to address quality and experience improvements.
- [ ]  Morning standup with Trello board open
- [ ]  Cover what has been completed in the last day and what every one is working on today.
- [ ]  **⚠︎ *Most* features should be in place by the end of the day.  Be sure to make plenty of time to address bugs, and get your app looking like something you'd want to show off.  Focus on MVP.  Adding stretch features after today is discouraged.**
- [ ]  100% of Front end features & UI Components, built and consuming data from the backend (Now is the time to focus on Form).
- [ ]  Front end is pulling in all data necessary from backend, users can interact with ALL CRUD operations on the Project data.
### Thursday
- [ ]  ⚠️ REMEMBER: FOCUS ON BUGS AND POLISH TODAY
- [ ]  Morning standup with Trello board open
- [ ]  Cover what has been completed in the last day and what every one is working on today
- [ ]  Complete Sprint Retro form by end of day
- ***Strong emphasis on bug fixes and UI/UX***
- [ ]  Document your projects within the Readme files in their Github repositories. Without having to talk to you specifically, any developer should be able to install, contribute to, and run your project based on the descriptions found in your readme
### Friday
- Morning Time before Lunch is all dedicated to polish and Demo Day prep
    - ***There will be a sign up sheet delivered to sign up to demo in the hour long school-wide demo***
- There will be a school wide demo held on Friday for 1 hour during the morning
    [Shark Tank: Presentation Agenda for Demos (For Students)](https://www.notion.so/aafaadbe9e1448f8bbcce8afae11cf7b)
    - **Students will volunteer their projects to be demoed to their TLs**
    - Only 10 Projects will be demoed across the entire student body
- Group wide demos will take place in your TL groups - TLs will use the project rubric to assign a score.

# Web Unit 2 MVP Requirements:
Student created functional components and used events in application to add dynamic functionality to app.
Student's code was organized at the component level, proper usage of state and props are demonstrated throughout the project, the UI is composed of small reusable components, proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented.  Student used Array methods to dynamically render HTML elements.
Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. Route management properly installed and used to show top level pages as well as nested views where necessary.
Student has set up component management for the forms in the app that makes sense for each form. Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. Some form validation is in place.
### Stretch:
Student incorperated a third party event/animation library like unto Greensock, Anime, React-motion etc.
Student was able to architect components to be easily reused. Student used advanced React techniques like the composition pattern, custom hooks, render props, HOCs, etc.
Not only are standard network request techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.
Student showed great insight in setting up the state management for the app's forms. Form validation is in place for all fields, and covers all use cases. Loading states and success/error notifications are in place and add to the overall UX of the app.

# Web Unit 3 MVP Requirements:
React application is deployed and the static landing page is correctly incorporated with the app.
CRUD operations drive the application. Each participating student individually created pages that complete all CRUD operations. Token authentication is handled correctly.
Student has implemented a state management system that makes sense for the project. It is organized well and implemented correctly. State is not lost as user goes through the application.
### Stretch:
App is deployed, and continuous deployment is set up in a manner that is conducive to a team project environment. Project is organized well on GitHub. Extra considerations were made to help all team members understand how to contribute easily to the project, no matter their role.
Pages making HTTP requests do so in a logical manner that is cohesive with the app's state management system. Student showed great care and insight when handling token authentication. Student used a modular system for all requests (e.g. like a  useFetch custom hook).
Student showed the ability to manage state in a very coherent system at all levels of the app - global state management, component tree state management, and individual component management. The system is easy to understand and use. Student may have also architected it in such a way that it is reusable for a lot of the state management needs of the app.

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/bw-refugee-stories2/fe)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
