# Academe

A React-Redux single page app for consuming the Academe API (a basic school information system). Users can log in, create, edit, delete and view students.

You can play around with the deployed app [here](https://academe-react.herokuapp.com/). Log in with sample user:

* email: admin@academe.com
* password: admin

Uses:
* React
* Redux
* React Router
* Redux Thunk middleware

## Why Did I Build This?

This app was built out to demonstrate a basic React Redux single page application. 

## Persistence Decisions

A Relational Database (Postgres) was used at the API as the domain model of a school information system would require strong consistency due to its nature, in the likes of financial and health systems.


## Authentication

A very basic database authentication was used just for a better user feedback. A more secure and better authentication implementation would be used for a real world case.

## UI/UX

UI is responsive and mobile first. UI/UX is very basic and would require a shinier one for real deployment.

## Architecture
Architecture follows the pattern of Containers and Presentational Components and the separation of concerns.

