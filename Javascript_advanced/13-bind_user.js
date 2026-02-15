let user = new Object();
user.hobby = "Calligraphy";
user.favoriteSport = "Hockey";
user.astrologicalSign = "Aries";
user.firstName = "Guillaume";
user.lastName = "Johns";
user.location = "Netherlands";
user.occupation = "Engineer";

function logWelcomeUser(welcomeString) {
	console.log(welcomeString + ", " + user.firstName + ". Your occupation is: " + user.occupation);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);

logWelcomeUser("Welcome");
