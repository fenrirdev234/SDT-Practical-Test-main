## Points on things I would have liked to do

but due to time constraints and the objective of this test, it wasn't cost-effective.

### Backend

- change the architecture of the application so that the code is less coupled and allows for easy application of testing.

'''

/src
/v1
/controllers
/models
/routes
/services
/config
/tests
/utils
/secrets.js

'''

- Move all constants related to port and database management to a secret file and make them environment variables.
- Create an env.example file.
- Document the endpoints with Swagger.
- Implement tests.
- Implement security, for example, using Helmet.js.

### Frontend

- The project has a problem with incorrect typing. One of the most recurring issues is with 'Recort'. I've fixed this problem in all the files I've worked on when I've encountered it, but there might still be files with this issue.
- With more time, I would dedicate myself to creating better documentation and implementing testing.
- One detail I forgot to fix is that the form doesn't clear the fields when it's submitted, but it does clear the state. With a better understanding of how the Tiptap library works, I could resolve this.
- The project needs a refactor. There's a lot of redundancy in the code.
