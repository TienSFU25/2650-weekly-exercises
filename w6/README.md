## Accessibility

Do the first two questions in here:

https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA

## WebSockets

Thanks Brian for allowing me to use this assignment. https://www.koehler.ca/langara/202120/CPSC-2650/websocket

### Testing WebSockets

Clone this project: `https://gitlab.com/langarabrian/simple-chat2.git`

Change to the project directory (`cd simple-chat2`) and install dependencies (`npm install`).

Run on port 8080 (`PORT=8080 npm start`), preview, and confirm that the application works.

### The actual exercise

Clone this project: https://gitlab.com/langarabrian/fancy-chat2

Test the application and make sure you understand how it works.

1. In `public/index.html` add a couple of `“button”` elements just after line 11. Label one “Busy” and the other “Available”.

2. Add `“onclick”` event handlers to the buttons that will emit a new type of event called `“status”` that the server will deliver to all the other participants in the chat.

3. For example, if I click on the `“Busy”` button, everyone else will see a log message "Tien is busy”. If I click on the `“Available”` button, everyone will see a log message “Brian is available”

4. Keep it simple, there is no need to track everyone’s status.

## Submission

1. `a11y_a.html`, `a11y_b.html` for the two MDN accessibility questions
2. Github repo link (+SHA +screenshot) for your "Tien is busy" Websocket implementation over `fancy-chat2`

## Grading

- 3/3: "nice!"
  - Exceptional work with all tasks completed satisfactorily according to the specification
  - Efficient, well-designed, and well-coded
- 2/3: "satisfactory"
  - Most tasks completed, but a few key things missing
  - Some inefficiencies in the implementation, or deviation from the specification
- 1/3: "it barely works"
  - Some progress made, but major deficiencies in solution
  - Many tasks missed or major deviation from specification
- 0/3: "you didn't do much"
  - Little or no progress
  - Few points from specification implemented

Note that up to -0.5 may be deducted for improper hand in, disorganized files or code, etc. Please ask me if in doubt.
