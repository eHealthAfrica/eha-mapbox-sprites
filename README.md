# Custom Sprite

Custom sprites for Mapbox GL Maps

## System Requirements

### With Node+Yarn

- [Node 8.x LTS](https://nodejs.org/en/blog/release/v8.17.0/)
- [Yarn 1.x](https://yarnpkg.com/)

1. Install all dependencies

    ```bash
    yarn install --no-lockfile --production=false --silent
    ```

2. Add icons to `icons/`

3. Generate Sprites

    ```bash
    yarn build
    ```

4. Include in MapBox styles file

    ```js
    {
        version: 1,
        name: 'My map',
        // ...
        sprite: 'https://raw.githubusercontent.com/ehealthAfrica/custom-sprites/master/dist/eha-mapping',
    }
    ```
