---
title: 'Why We Use React Hooks useState'
excerpt: 'Ever wonder why we have to wrap every state inside our React component with useState?'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-07-01T05:24:25.352Z'
author:
  name: Adith Widya Pradipta
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

Ever wonder why we have to wrap every data/state inside our React component with useState? Why don't we just use a simpler approach like making variables with a let keyword, and initiate our state there? Like what we can do in Svelte for example.

Let's talk about it deeper with a code example:
[*Also, you can play around in this CodeSandbox](https://codesandbox.io/s/why-we-use-react-hooks-usestate-xspwq)

```jsx
import * as React from 'react'

function ReactComponent() {

  // What if we just do it this way?
  let favoriteFood = ''
  
  const handleChange = (event) => {
    // Let's change the favoriteFood variable
    // to hold our new state
    favoriteFood = event.target.value

    // Let's peek the value we type to the input in console
    console.log(event.target.value)

    // Prove that the variable/state value is change
    console.log("fav", favoriteFood);
  }

  return (
    <div>
      <form>
        <label htmlFor="favorite">Favorite Food:</label>
        <input onChange={handleChange} id="favorite" />
      </form>
      <p>
        {favoriteFood ? (
          favoriteFood
        ) : (
          'Type your favorite food, please!'
        )}
      </p>
    </div>
  )
}

export default ReactComponent

```

As you can see in the code example above. We use a simple variable to hold our state. The code is working if you see it on the console panel. It shows change on every word we type to the input. But you will notice instantly, that your favorite food name is not displaying on the render. Nothing.

But, why? The code is not showing any errors. What we type to the input is perfectly showed on the console panel. Even the variable value is updated.

Turns out, it has to do with the "render" part in React. And that's the part where one of the React Hooks API called useState will do the job flawlessly.

In the previous code example, we're not using any "mechanism" on our state initialization. We just using a pure variable with a let keyword. Nothing in the code is telling React to update the render (rerender) when we trigger a state update, to show the new value of the state to the user interface.

Let's hold keywords for this: **Trigger a state update**, **New value of the state**, and **mechanism**. After that, make a change to the code like below:

```jsx
function ReactComponent() {
  //let favoriteFood = ''
  const [favoriteFood, setFavoriteFood] = useState('')

  const handleChange = (event) => {
    // Remove all the codes before
    // And change to this:
    setFavoriteFood(event.target.value)
  }

  // ...rest of the code
}
```

Now we finally use the `useState API`. Notice we have two elements inside what `useState` returns as an array: `favoriteFood` and `setFavoriteFood`. We can also call it `accessor` and `mutator` (adopting from other programming language concepts).

The accessor (favoriteFood) is where `React useState` stores the state for us. The mutator (setFavoriteFood) is what `React useState` gave to us for the function we can **trigger to update our state** in the accessor. And after we trigger state update with `setFavoriteFood`, now `favoriteFood` will hold our **new value of the state**.

Okay, what the ***difference*** then with our previous approach? With a simple variable with a `let` keyword before?

That's where `React useState` is performing the difference. `React useState` **has a mechanism** that will tell React to always updating the render on every state update. Because after we trigger `setFavoriteFood`, the state inside `favoriteFood` is updated, then we need something to work for us to update the `DOM` with the current updated state we have. And voila! What we type on the input, is immediate shows on the render. Thanks, `React useState`!

It concludes the sole reason why we really need `React useState` to manage our internal state in a React component. Because we are provided with a built-in mechanism inside the API to control the rerender on every state update.

But, what if we don't want to trigger rerender when we store something and later change it? That's the job for `React useRef`. Maybe we can talk about it in another blog post 😋