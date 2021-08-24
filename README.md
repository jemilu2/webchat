# Webchat
A chatroom ui client for the chat application in 
gorrilla/websocket

## Demo 
https://webchat-nxmmnmprh-jemilu.vercel.app/chat

The demo uses a chat server written by gorilla in
their websockets documentation at

https://github.com/gorilla/websocket/tree/master/examples/chat

I made modifications to enable the app to be run
on heroku.

# Installation
    Clone the dir
    cd into the webchat dir
    run yarn install or npm install
    run yarn dev or npm run dev to start the application.

    It will need an internet connection to run since I've
    hardwired the websocket connection to connect to the
    hosted chat server on heroku. I was thinking about
    mocking a chat server for the demo but you can do it
    yourself. 

