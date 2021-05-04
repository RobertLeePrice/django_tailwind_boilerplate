function component () {
    const elem = document.createElement('div');
    elem.innerHTML = 'Hello, Webpack!';
    return elem;
}

document.body.appendChild(component());