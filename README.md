# eHA MapBox Sprites

eHealth sprites for Mapbox GL Maps

## System Requirements

### With Node+Yarn

- [node 8.x](https://nodejs.org/en/blog/release/v8.17.0/)
- [yarn 1.x](https://yarnpkg.com/)

1. Install all dependencies

    ```bash
    yarn install --no-lockfile --production=false --silent
    ```

2. Add icons to `icons/`

3. Generate sprites

    ```bash
    yarn build
    ```

### With Docker

- [docker](https://docs.docker.com/engine/install/) >= 18.06.x
- [docker-compose](https://docs.docker.com/compose/install/) >= 1.25.5

1. Build container

    ```bash
    docker-compose build
    ```

2. Add icons to `icons/`

3. Generate sprites

    ```bash
    docker-compose up
    ```

## How to use

Include in the MapBox styles file

    ```js
    {
        version: 1,
        name: 'My map',
        // ...
        sprite: 'https://raw.githubusercontent.com/ehealthAfrica/eha-mapbox-sprites/master/dist/eha-mapping',
    }
    ```
