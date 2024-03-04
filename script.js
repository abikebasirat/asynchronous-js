// interval and set time out
//setInterval() setTimeout()
//set interval alwoy is chank of code every time a septiver than 
// the set timeout is alowy to espectp befo do not that othet code and to cotinu 


//when we are talking aabout asy, we are talking about setinterval() and settimeout()
//method dey with parenthesis
// interval allow u to execute a chunk of codes
//  everytime a specified amount of milliseconds passes

//settimeout functions allow u to wait a certain amount
// of time before  executing a chunk of codeset


// const interval = setInterval(() => console.log("Hello word"),1000);
// clearInterval(interval);

const myInterval = setTimeout(() =>console.log("Hello world"),3000);
  

// synchronous javascript is one a   which  code why line by line and the taxd and conplited  intercli
//  their  is no time delayed in conpletion taxks for those line of code.

const functionOne = ()=>{
console.log("function One");

functionTwo();
  setTimeout (() =>console.log("functionOne,partTwo"),1000)
 
}

const functionTwo = ()=>{
 setTimeout(()=> console.log("function Two"),2000)
    
}  
    functionOne()


  //  caall back 

  const fetchhUser = (username) =>{
     setTimeout(()=> {
    return { user: username}
}, 2000)
}

const user = fetchhUser("text");
console.log(user);


const fetchhUserOne = (name,callback) =>{
    setTimeout(() => {
        console.log("Now we have the user");
        callback({user: name})

    },2000)

}

const user2 = fetchhUserOne("Ali",(user2) =>{
    console.log(user2)
});


// Callback Hell

const fetchUserTwo = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have the user");
        callback({username});
    },2000);
}

const fetchUserPhotoes =(username, callback) => {
    setTimeout(() => {
        console.log("We now have the photo")
        callback(["photo1", "photo2"])
    }, 2000);
}

const fetchUserPhotoesDetails = (photo, callback) => {
    setTimeout(() => {
        console.log(`Now we have the photo details ${photo}`);
        callback("details")
    }, 2000);
}

const user3 = fetchUserTwo("Michael", (user) => {
    console.log(`Your name is: ${user.username}`);
    fetchUserPhotoes(user.username, (userphotos) => {
        console.log(`Your photo are:${userphotos}`);
        fetchUserPhotoesDetails(userphotos[0], (details) => {
            console.log(`Your photo detalis are:${details}`)
        });
     });
 });


// This is called callback Hell. it becomes unreadable

const user4 = fetchUserTwo("Michael", (user) =>{
    fetchUserPhotoes(user.username, (userphotos) => {
        fetchUserPhotoesDetails(userphotos[0], (details) => {
          fetchUserPhotoesDetails(userphotos[0], (details) =>{
            fetchUserPhotoesDetails(userphotos[0], (details) =>{
                fetchUserPhotoesDetails(userphotos[0], (details) =>{
                    console.log(details);
                });
            });
          });

        });
    });
});

// Promice aer objrct ida retrune a sucecful fetch data or herro

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("New we are in promise");
        resolve({username: "Bode"});
        reject("User not found");
    }, 4000);

});
promise
.then((user) => console.log(user.username))
.catch((error) => console.log(error));


const fetchUsers = (username) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("We are using promise");

            resolve(username);
            
        }, 4000);
    })
}

const fetchUsersePhoto = (username) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("We have the photo");

            resolve(["photo","photo2"]);
            
        }, 4000);
    })
}

const fetchUsersePhotoDetails = (photo) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Now we have the photo details");

            resolve("details");
            
        }, 4000);
    })
}

fetchUsers("Zainab")
.then((user) => fetchUsersePhoto(user))
.then((photo) =>fetchUsersePhoto(photo[0]))
.then((details) => console.log(details) );


