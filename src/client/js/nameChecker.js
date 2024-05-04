function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regex = new RegExp(emailPattern);

    if (inputText.match(regex)) {
        alert("Please don't input email");
        return false;
    }

    return true;
}

export { checkForName };
