This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## This is the explanation of my decision to go with Next.js for the OOT video application :)

As far as `Better Software Group` is popular broadcasting platform, I believe an additional 
CEO Optimization would be the best in order to enhance the company's completed solutions 
such as Roku, VOD app for children, New Eleven Sports App and future web projects as well.

This is my first experience with `Next` technology, previously I have used just pure `redux` mostly. 
And this task encouraged me to go for risk and try the `SSR` approach out. And of course I understand
that for a proper usage of the API I need to have a proper access to the backend, because storing the token 
in local storage is not working with `Next`. But anyway, I have got an experience with other benefits of `Next` :)

Each page has its own title, description keywords (not required). The page with the player actually promotes the Video displayed, 
because I pass the variables storing the title and description of the video in the props of MainLayout which go 
to the special `<Head />` tag.


## Additional feature

The entire `Photos` page was developed by me in order to represent `endless scroll`. 
The content in the `db` can be huge in size and loading everything at first time will be incredibly difficult fo `React`.
So, I decided to realize the uploading the items (photos) once the user achieves the end of the page.
I wanted to make it inside the Video Page, but the API response was the same regardless of changed the body property 
such as 
`{
    PageNumber,
    PageSize
}.`

So, I hope you would find it interesting :)
