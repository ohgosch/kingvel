# Kinghost Marvel
A simple application for list Marvel stories. Preview: [https://kingvel.netlify.com/](https://kingvel.netlify.com/).

## Development dependencies
- Node (>= 11.13.0)
- NPN (>= 6.7.0)
- Yarn (>= 1.15.2)
- Git (>= 2.17.1)

## Basic setup
``` Shell
yarn install
```

## Development watch
You can look the result during your development using the [http://localhost:8080](http://localhost:8080) address.
``` Shell
yarn serve
```

## Development build
``` Shell
yarn dev
```

## Production build
``` Shell
yarn production
```

## More informations
This application uses the [Marvel API](https://developer.marvel.com/docs) for find 5 stories of 3 heroes of the developer preference.

This application is following a visual design in the [Figma App](https://www.figma.com/file/NW5beKv6YOL8AEqHcikJLene/Kingvel?node-id=0%3A1) where everything was carefully planned.

The application use [React](https://reactjs.org/docs/) for write the dynamic HTML in the page. We've used the [Axios](https://github.com/axios/axios) for the requests.

For the styles we've used the [Styled Components](https://www.styled-components.com/) for a improved organization.

The final client need support the Grid technology.
