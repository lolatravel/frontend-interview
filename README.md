### `To start the application`
Run 'npm start' in the terminal and Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Interview`

### `1: PR Review`
Ask candidates to review the open PR on this repo. There are several issues with the PR that should be obvious.
Things that could be noticed and commented on:
    - A name renders the word null
    - An image is broken and doesn't render properly
    - If the number of travelers is too long the list of names overflows the container
    - Do they notice console errors and comment on those
    - Spacing breaks on smaller resolutions. do they check for this

### `2: Fix errors in PR`
Ask them to fix some of the errors in the PR
    - Spacing overflow
    - Null error
    - Make it more responsive

### `3: Write a function`
We will have a list of trips that gets returned from the server. We will also have a current user object get returned. Ask the candidate to write a function that
when the 'my trips' filter is selected will only show trips that has the current user as a traveler.


### `4: Make a mock component`
Ask the candidate to fill in the component that when a trip is clicked on it will render a row with more information about the trip.
