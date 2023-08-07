## Flow of Work

## 1.Install development tools

## 2.Create angular project

     1.create project folder
     2.install angular cli
     3.create folder as client

## 3.Add Header

     1.Genetate Component for Header
     2.Add Html for component
     3.Give styles for your header html

## 4.List Foods

    1.Create Food model
    2.Create data.ts
        1.Add sample foods
    3.Add images to assets
    4.Create food service
    5.Create home component
        1.add ts
        2.add html
        3.add css

## 5.Search

     1.Add method to food service
     2.Add search Route
     3.Show search result in home component
     4.Generate search component
         1.Add to home component
         2.Add ts
         3.Add html
         4.Add css

## 6.Tags

    1.Create tag model
    2.Add sampletags in data.ts
    3.Food service
        1.Add get All tags method
        2.Add get All foods by tag name
    4.Adding tag routes
    5.Show tag results in home component
    6.Generate tag component
       1.Add to home component
       2.Add ts
       3.Add html
       4.Add css

## 7.Food page

    1.Add method to food service
    2.Generate Food page component
         1.Add route
         2.Add td
         3.Add html
         4.Add css

## 8.Cart Page

    1.Create cartItem model
    2.Create Cart model
    3.Create cart service
    4.Add to cart button in food page
    5.Generate cart page
        1.Add Routr
        2.Add ts
        3.Add html
        4.Add css

## 9.Not Found!

    1.Generate Component
        1.Add ts
        2.Add html
        3.Add css
    2.Add To Pages
        1.Home Page
        2.Food Page
        3.Cart Page

## 10.Connect To Backend

        1.Create backend folder
        2.npm init
        3.npm install typescript
        4.Create tsconfig.json
        5.Create .gitignore
        6.Copy data.ts to backend/src
        7.npm install express cors
        8.Create server.ts
            1.install @types
             2.Add Apis
        9.npm install nodemon ts-node --save-dev
        10.Add urs.ts to frontend
        11.Add HttpClient module
        12.Update food service

## 11.Login Page

         1.Generate Component
            1. Add to routes
            2.Add ts
            3.Add html
               1.Import Reactive Forms Module
            4.Add Css
         2.Add login Api
             1.Use json
             2.Add jsonwebtoken
             3.Test Using Postman

         3.Generate User Service
             1.Generate User model
            2.Add User Subject
            3.Add Login Method
                1.Add User Urls
                2.Generate IUserLogin interface
                3.Add ngx-toastr
                     1.Import Module
                     2.Import BrowserAnimationsModule
                     3.Add styles in angular.json
                4.Add to Header
                5.Add Local Storage methods
                6.Add Logout Method
                    1.Add to Header

## 12.Make Components For Login Page

           1.Input Container
           2.Input Validation
           3.Text Input
           4.Default Button

## 13.Connect Login API To MongoDB Atlas

         1. Moving Apis into routers
         2.Create MongoDB Atlas
         3.Create .env file
         4.Install
            1.mongoose
            2.dotenv
            3.bcryptjs
         5.Connect to MongoDB Atlas
         6.Use MongoDB instead of data.ts in apis

## 14.Register User

        1.Add Register api
        2.Add Register service method
        3.Add Register link
        4.Add Register Component

## 15.Loading

        1.Add Image
        2.Add Component
        3.Add Service
        4.Add Interceptor

## 16.Checkout page

        1.Create Order Model
        2.Create Checkout Page Component
            1.Add To Router
        3.Add User to User Service
        4.Add Cart to Cart Service
        5.Create Order Items List Component

## 17.Save Order

        1.Add Order Model
        2.Add Order Status Enum
        3.Add Auth Middleware
        4.Add Order Router
           1.Add create API
        5.Add Order Urls to urls.ts
        6.Add Order Service
             1.Add create Method
        7.Add Auth Interceptor

## 18.Payment Page

        1.Generate Component
        2.Add 'getOrderForCurrentUser' api
        3.Add Order Service method
        4.Connect Component to Service
        5.Make the map component readonly
