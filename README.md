Group 8: Shirt Simplify


In the custom t-shirt printing industry, a large challenge for customers is balancing the cost of printing with design. The more colors a design has, 
the higher the production costs. At times, users may have to sacrifice their images, choosing less creative and appealing images, as they are too costly 
to produce. Shirt Simplify aims to tackle these stuggles by accepting shirt designs and reducing the number of colors in the design so that the printing
cost is cheaper. The users are able to download their modified design and input it into any custom shirt website.


This is a React App + Vite. All dependencies must be installed in order to successfully host the app.


The frontend is hosted locally, typically on port 5173. 

  - to start the frontend:

    cd frontend
    
    npm run dev

    
The backend is hosted locally as well, on port 8081. MySQL must be connected (we used VSCode so we were able to link the database directly on there) to 
a database named 'shirt_simplify'. This database contains 3 tables -> 'contact' (name,email,message), 'saved' (email, image), and 'users' 
(email,password).

  - to start backend:
    
    cd backend
    
    npm start
    

The following is a list of pages within the app that a user may navigate to. Each page will have a description, as well as requirements to use them. Note
that a user may always navigate around the app using the 'Menu' on the header which is always present.

  - Home
    A welcome page. Contains light information about the app and what it does. Allows for direct navigation to Simplify page which contains our main
    functionality. 
  - Sign In
    Allows a user to sign in to their pre-existing account. Requirements: user has an account already, email + password fields are filled and valid logins.
    After sign in, user is redirected home and their email is put on the header. Also, users may navigate to the Sign Up page if they do not already have
    an account.
  - Sign Up
    Allows for account creation. Requirements: email is new and uniqure, email + password fields are filled. After sign up, user is logged in and will be
    redirected home. Their email is put on the header. Also, user may go back to the Sign In page.
  - Simplify
    Users input an image in the box on the left side of the screen and put in a number in the field on the right. Requirements: image must be inputed and
    be in .png, .jpg, or .jpeg format, number in field must be greater than 1. Redirects user to the Output page.
  - Output
    Shows the user's design with reduced colors. User is allowed to download the image or save it. Requirements to save image: user is logged in.
  - Help
    A general F.A.Q. for the user with helpful questions. If a user still has a question they may go to the Contact Us page. This page allows for direct
    navigation to Contact Us
  - Contact Us
    Allows a user to contact directly with Shirt Simplify staff. Requirements: name, email, and message fields must all be filled out. Redirects hom after
    a message is submitted.
  - Profile
    Only visible to users who are logged in. Displays user's email as well as images they have saved. The images are listed along with their preview. The
    user is also able to logout of their account from here. When a user logs out they are redirected home.

Work done on Project:

Coding:
  - Frontend: Abbey Cowles
    
  - Backend:
    
    - Reduction Algorithm (and calls related to it): Wes Van Erp
      
    - Everything else: Abbey Cowles
      
Presentations:
  - Proposal Presentation: Abbey Cowles
    
  - Midterm Presentation: Abbey Cowles and Wes Van Erp
    
  - Final Presentation: Abbey Cowles and Wes Van Erp
    
Writing:
  - Sprint Report Write Ups: Wes Van Erp
    
  - UI Doc: Abbey Cowles
    
  - Testing Doc & SRS Doc: Wes Van Erp
    
  - SRS Doc & SDD Doc: Alec Trotman
    
General Testing: Abbey Cowles and Wes Van Erp
  
Jira Board Updating: Abbey Cowles and Wes Van Erp
