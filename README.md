# The Name Game

**Objective:** Using free APIs, create an Angular application which guesses information about a person based on their name.

**Starting point:** Skeleton Angular project with basic elements and mock data in place.

**Before you start...** Make sure you can build and run the app. (You should get an age of 99 for any input values.)

## Tasks:
1. Replace the mock data with a call to Agify.io (details below)
2. Validate input - only enable button when input value is OK.
3. Add some indication that the request is in progress (e.g. a spinner)
4. Use the "age" and "count" values to filter out ages which are unlikely to be accurate - display a message when this occurs
5. Extend the app to also call genderize.io and present the guess of gender

## Agify.io example calls:
### Real name:

https://api.agify.io/?name=tom

```json
{"name":"tom","age":39,"count":120238}
```

### Fake name:

https://api.agify.io/?name=frqka

```json
{"name":"frqka","age":null,"count":0}
```