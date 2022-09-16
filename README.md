App created: https://phase3-frontend-theta.vercel.app/

# Features implemented in the front end

## UI Scalability with window size
Uses units such as rem to scale the nesting elements of the window relative to the parent element
## Mobile first development (using media query breakpoints, etc)
Uses css media quaries in order to adapt the screen size for mobile devices
## Storybook w/ both actions and interactions (play)
Uses two storybook components under /stories folder. One of them is a pokemon card and the other is a button that implments the action and interaction features
## API connection to your own API that is cloud hosted
Uses nextJs frame work which is deployed on Vercel. The API calls to the endpoints are done within the app to the /pages/stories/Pokemons.js database
## Comprehensive unit testing
Unit testing of different components such as PokemonCard is done in storybook before using in the web app
