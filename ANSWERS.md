# Answers

- [x] Why are forms used so often in web applications and software?

It's the easiest way to gather basic information about a user.

- [x] What advantages are there by using a forms library like Formik?

Formik is a small library that helps you with the 3 most annoying parts:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

- [x] What is stateful logic?

Stateful logic is logic that is built into a component. It can be a function that handles a click event or a typing event, or maybe a function that sets toggle state, or even a logic that formats data passed to the component before it gets displayed. Usually this kind of logic deals with state in the component. Thus the moniker “stateful logic.”

- [x] What is a custom hook, and what does it mean to compose hooks together?

Custom hooks are regular functions which are using hooks that you can use anywhere and contain stateful logic.

- [x] Describe the process of retriving a token from a server and using that token in subsequent API calls.

Once a request is made, it tells the server what kind of action the client wants the server to take in. The four most commonly seen in API’s are:
GET — Asks the server to retrieve a resource.
POST — Asks the server to create a new resource.
PUT — Asks the server to edit/update an existing resource.
DELETE — Asks the server to delete a resource.

The server sends the user back to the client using the callback URL. Hidden in the response is a unique authorization code for the client. The client takes the authorization code it receives and makes another request to the server. This request includes the client’s secret key. When the server sees a valid authorization code and a trusted client secret key, it is certain that the client is who it claims. The server responds back with an access token.
