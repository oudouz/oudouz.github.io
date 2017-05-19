var config = {  
	apiKey: "AIzaSyCeLb593nc4IMYNMNyr34GXwAKPK4nR_-Y",
	authDomain: "web-app-ef470.firebaseapp.com",
	databaseURL: "https://web-app-ef470.firebaseio.com",
	projectId: "web-app-ef470",
	storageBucket: "web-app-ef470.appspot.com",
	messagingSenderId: "42779219816"
};  
firebase.initializeApp(config);  

var uiConfig = {  
	signInSuccessUrl: 'services.html',  
	signInOptions: [  
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,  
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,  
		firebase.auth.EmailAuthProvider.PROVIDER_ID  
	],  
tosUrl: '<your-tos-url>'  
};  
var ui = new firebaseui.auth.AuthUI(firebase.auth());  
ui.start('#firebaseui-auth-container', uiConfig);  