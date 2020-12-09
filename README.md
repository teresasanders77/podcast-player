# PODLIFE: a podcast-player

An uncomplicated podcast player that lets users listen to a variety of podcasts of their choosing. The app is built using [create-react-app](https://create-react-app.dev/), [react-h5-audio-player](https://github.com/lhz516/react-h5-audio-player/releases), and the [ListenNotes API](https://www.listennotes.com/api/).

## Key Features
* A functional search to filter through the podcast API.
* A page displaying the filtered results. 
* Each result is clickable and will open up to the audio player. 
* Player includes functionality to play, pause, skip, and repeat each podcast as well as control the volume. 

## Future Development 
We are looking forward to adding the following extra functionality soon!
* Login page 
* Ability to add podcasts to a favorites list 
* Speech to text search
* Offline access
* Progressive Web Application 

 ## Installation 
 1. To install:  ```npm i```<br><br>
 2. API key: Make a ```.env.local``` folder in the root of your project. Include the following line with your own API key: ```REACT_APP_LISTEN_NOTES_API_KEY=<'Your API Key'>```<br><br>
 3. To run:  ```npm start```
* Runs the app in the development mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* The page will reload if you make edits.




 ## Project Dependencies
 ```"axios": "^0.21.0",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.0",
    "react-dom": "^17.0.1",
    "react-filter-search": "^1.0.11",
    "react-h5-audio-player": "^3.5.0",
    "react-icons": "^4.1.0",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "redux-thunk": "^2.3.0",
    "use-react-router": "^1.0.7",
    "web-vitals": "^0.2.4"```
