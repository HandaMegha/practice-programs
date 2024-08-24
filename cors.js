//CORS: ->
//It is a mechanism which uses additional http headers to tell the browser whether a specific web app can share resource with
//another web app but imp point to note that both the web app should have different origin. If they have same origin then they can
//share resources very easily but in case of different origin they need to follow cors mechanism.

//Without cors these were not allowed (let's say we have a url https://meghahanda.in)
// -> Cannot get data from different domain (google.com/api/getData)
// -> Cannot call any api with sub domain (api meghahanda.in)
// -> Cannot access to prompt(meghahanda.in:5050)
// -> Cannot access to other protoclos(http://meghahanda.in)

//With the help of cors all these things are allowed
