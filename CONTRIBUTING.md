# How to contribute?

I'm always gonna add more tools to this website; really appreciate that you're interested in contributing to either the Next.js app itself or through adding more cool tools that you've found to the collection!

## Tech specs

- This website was created with Next.js (using the new App Router) and deployed to Vercel
- I use TailwindCSS to style stuff

## Adding new devtools

Most of the data is in `common/data.ts`. 

`categories` is a set of categories available to use, and is a Javascript object with a key being a category's ID and the value being the information regarding that category.

`projects` is the collection, represented as a list. Each entry holds the data related to that devtool, including the categories that it falls under, referenced via the category's ID (`categoryIds`)

To contribute, simply:
1. Add an entry to the `projects` list.
2. If you're wishing to add a new category, add that to the `categories` object, and cross-reference in your new `projects` list entry.
3. Make a PR and tag me for review!