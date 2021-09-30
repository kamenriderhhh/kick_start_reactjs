<div style="text-align: justify">
# Instructions for Kick Starting ReactJS


In this tutorial we will learn how to add react to a website and create a new React App. 

---
## Add React to your website.

First open up the 
[index.html](./resource/html_version/index.html)
and look through the codes and comments.</br>

Then render the website with the **open in browser** extension by pressing ```Alt + Shift + v```, then choose prefeable browser.

The following code is the main part to add the react script to the websire.

``` html
<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script 
    src="https://unpkg.com/react@17/umd/react.development.js"
    crossorigin
  ></script>
  <script
    src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    crossorigin
  ></script>
```

<div style="text-align: justify">
In the 
[app.js](./resource/html_version/app.js)
consisted of a button that will be render to element root in [index.html](./resource/html_version/index.html)
file and has an **click event** that will change the **component state value**.  


\- *Optional* - </br>
This part is just to convert the function/method in the class component by using the react component lifecycle such as (```componentDidMount```, ```componentDidUpdate```). More detail information can be found in [react component official documentation](https://reactjs.org/docs/react-component.html)

---

## Create a New React App. 

Create a React App would provide a more comfortable environment is the best way to start building a new single-page application in React. 

Before create a new react app we need to make sure  to have **Node >= 14.0.0** and **npm >= 5.6** on your machine.

To create and run a new react project, simply go to desire directory and type in the following code in your visual studio code terminal.

![create-react-app](https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg)

</div>