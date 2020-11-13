# Budget Tool Apollo 3 App

This is a very simple exploration of Apollo 3 Client with the Apollo Server.

# How to Run

1. Install Docker Desktop. The application requires Docker to run. For development machines, [Docker Desktop](https://www.docker.com/products/docker-desktop) is recommended.

2. Clone the repo to your machine.

3. Run the following command from within the cloned folder. The same folder where the `docker-compose.yml` file is located.

```bash
docker-compose up --build -d
```

This will build the images and run the containers for the GraphQL server, the REST server, and Redis cache server.

4. Change into the `client-app` folder. This is the location of the React application which uses the Apollo 3 client.

5. Run the following commands to view the web page. First, install the NPM packages.

```bash
npm install
```

Next, start the React development server.

```bash
npm start
```

Your default web browser should open and display the web page. All that you will see is a list of vendors. You can add, modify and delete vendors.

6. To access the GraphQL Playground or the REST API use the following URLs:

REST API: [http://localhost:3050/](http://localhost:3050/)

GraphQL Playground: [http://localhost:4000/](http://localhost:4000/)

Enjoy!
