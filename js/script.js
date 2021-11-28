let nb_cookies = 0;
let price_upgrade = 8
let cookies_upgrade = 1
let isactiv = new Boolean(false);

setInterval(function cookiesnumber(){
    
    document.getElementById("directcookies").innerHTML = "Vous avez " + nb_cookies.toFixed(0) + " cookies";

}, 20) 

function uppingcookies(){
    nb_cookies++;
    console.log(nb_cookies + " cookies")
}



function automatic(){
    if (nb_cookies > price_upgrade){
    nb_cookies = nb_cookies - price_upgrade;
    cookies_upgrade = cookies_upgrade * 1.1;
    price_upgrade = price_upgrade * 1.1
    console.log(price_upgrade)
    console.log(cookies_upgrade)
    document.getElementById("directupgrade").innerHTML = "Vous générez chaque secondes " + cookies_upgrade.toFixed(0) + " cookies";

    interval();
    
    }
}

function interval(){
    if (isactiv == true){
        clearInterval(upgradecookies());    
    }

    setInterval(function upgradecookies(){
        nb_cookies = nb_cookies + cookies_upgrade;
        console.log("repete 2 secondes")
        isactiv = true

    }, 1000)

}





