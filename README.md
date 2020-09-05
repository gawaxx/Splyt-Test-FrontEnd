# Splyt-Test-Frontend 

Welcome to the frontend of the Splyt code challenge.

This was done following the react-map Splyt challenge and is my own interpretation of the code challenge. I tried to follow it as best as I could. I decided to use a mix of class components and functional components, depending on the component functionality/requirement. 

Some functional components do use hooks, however no class component makes use of hooks, as I know you cannot use hooks inside of class components.

![alt text][Demo GIF]

[Demo GIF]: ./public/SplytMapTry10.gif "Demo Gif"

# How to

**Fork** and **Clone** this repo, then run **npm install** and then **npm start**

# Additional libraries you might need

Alongside this project I used **google-map-react**, **semantic-ui-css**, **semantic-ui-react** they should be present in the package.json and installed with npm install, however if they don't, you will have to manually install them: npm install --save google-map-react semantic-ui-css semantic-ui-react

And a third-party website called https://cors-anywhere.herokuapp.com/, which helped me circle around CORS issues. However I am limited to 200 calls per 60 minutes, as a result the app may stop refreshing if you move the slider a lot. I would've tried to setup my own proxy, but considering this was a react only challenge, I decided not to go this route.
