# :convenience_store: Local store

:point_right: [Visit the app](https://lo-cal-store.herokuapp.com/)

## :gear: Setup

```javascript
git clone https://github.com/nkhil/local-store.git
cd local-store
npm install
npm run dev
```

## :floppy_disk: Managing state without Redux

This was my first time playing around with managing state in React without prop drilling.

I was experimenting using React's `useReducer` along with the `useContext` API to manage state throughout the app. This is also the first time I've tried to save state in localStorage in a react project.

This repository was built trying out ideas from Cassidy William's [Pluralsight webinar](https://www.youtube.com/watch?v=vrmpUCpmawg). You can find their original repo [here](https://github.com/cassidoo/reading-challenge-webinar).
