# ACNH Lighthouse : App in your hand

## A Guide to Animal Crossing New Horizon

This app provides useful information and data to assist users playing 'Animal Crossing New Horizon' on Nintendo Switch.
I myself have spent copious amount of time to find the details of certain items, villagers and general what-to-do's with my phone, and some of them led to spending too much time in navigating to access the information I needed.

In general, this app provides these features, but not limited to:

- Search for information about in-game objects including items, villagers, quests
- Save and show my last search result
- UI to save current turnip price from Monday to Saturday
- Expect to suggest possible highest/lowest turnip price throughout the week with entered data
- Update page that shows the latest update and seasonal events along with past events.

The app is a personal hobby app and is in its development stage.

The final goal is a working deployable Progressive Web App, where users can access to my website and use the app in his or her own smartphone, that works just like a native app from the Appstore or Playstore.

# Current Progress

### Stage I
- [x] General App blueprint and features brainstorming
- [ ] Wireframing using Figma (50%)
- [x] Stack Decision
- [ ] DB Planning
- [ ] Basic App Setup
- [ ] Basic Backend API Setup

### Stage II
- [ ] Index Page Frontend
- [ ] Search Function
- [ ] Page Router and Navigation


### Stretch features
- User Community to post trades and giveaways
- User Community to write posts to share ideas and tips
- Daily Quests - a list of checkboxes for daily to-do's
- Earn a badge for daily quests and accomplishment
- My profile add/edit
- Gmail/facebook authentication for user signup
- Upload screenshots from Nintendo Switch

## Stack
- Node.js
- React
- Progressive Web App
- Material-UI
- Express.js as backend
- Storybook for unit testing
- PostreSQL with ElephantSQL for cloud database

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
