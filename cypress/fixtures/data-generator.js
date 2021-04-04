import {emailBase, emailServiceProvider} from config

function generateID(length){

    let result = '';
    let characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0; i< length; i++){
        result = result + characterSet.charAt(Math.floor(Math.random()*characterSet.length));
    }
    return result;
}

function generateEmailAddress(){
    
    return  emailBase + Date.now() + emailServiceProvider
}

