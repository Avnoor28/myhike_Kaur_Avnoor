function read_display_Quote() {
    console.log("inside the function")

    //get into right collection
    db.collection("quotes").doc("tuesday")
        .onSnapshot(tuesdayDoc => {
            console.log(tuesdayDoc.data());
            document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quotes;
        })
}
read_display_Quote();

function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    console.log(user_Name);
                    $("#name-goes-here").text(user_Name);
                })
        }
    })
}
insertName();