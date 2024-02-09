const btn = document.getElementById("btn");
const joke = document.getElementById("joke");



//https://icanhazdadjoke.com/j/R7UfaahVfFd


btn.addEventListener("click", getjoke);



async function getjoke(){
    const response = await fetch("https://icanhazdadjoke.com",{
        headers: {
            accept: "application/json"
        }

        
    });
    let data = await response.json();
    joke.textContent = data.joke;
}
getjoke();