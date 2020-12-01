## **4. PROJECT: Hack Your Weather III**

> Make sure you're building on last week's codebase.

The main additions you'll add this week is to (1) keep adding to the list of already searched cities and (2) allow users to remove a city from previous search result.

### 1. Requirements

By the end of this week's assignment your application should look similar to this:

![Week 3 Wireframe](../assets/project/week3.png)

Here are the requirements your project needs to fulfill:

- Any time a user searches for a new city, add it to a list of already searched cities
- Allow a user to delete a search entry, by clicking the "X"
- Only allow a user to use the "Search City" button when the input field has at least 1 character
- Redploy your site

Hints:

- Think about what data structure makes most sense to use
- Make use of `filter()` when removing cities

## **4. PROJECT: Hack Your Weather IV**

> Make sure you're building on last week's codebase.

This week we'll finish our application by integrating 2 things: `client-side routing` with [React-Router-Dom](https://reacttraining.com/react-router/web/guides/quick-start) and `charting` our data (in either hourly or five day forecasts).

### 1. Setup

1. Install the following packages: [React Router Dom](https://www.npmjs.com/package/react-router-dom) and [Recharts](https://www.npmjs.com/package/recharts)

```
npm install react-router-dom recharts
```

### 2. Requirements

At the end of the week the user interface of your application will look mostly the same, but with an additional page:

![Week 4 Wireframe](../assets/project/week4.png)

Here are the requirements your project needs to fulfill:

- Divide your page into 2 different routes (`/` and `/:cityId`), using `react-router-dom`
- Allow users to click on the searched city to open the city page
- The city page will be on a different route identified by the city id (make use of the `<Link>` component given by `react-router-dom`)
- On the city page there will be a chart (made with `recharts`) that displays the correct data for 5-day forecast
- Add a "Back" button to go back to `/`, on the city page
- Redeploy your site

Hints:

- Read the documentation to get a basic sense of what problems both `react-router-dom` and `recharts` are trying to solve, and to learn how to use them
- Make sure to have a clear overview of your application so far, before you add this week's features to it
