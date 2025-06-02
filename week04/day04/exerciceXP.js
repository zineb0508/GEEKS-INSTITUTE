/* EXERCICE01:
<!DOCTYPE html>
<html>
<head>
  <title>My Form</title>
</head>
<body>
  <h2>Send a Message</h2>
  <form method="GET" action="">
    <label>Name:</label>
    <input type="text" name="name"><br><br>

    <label>Message:</label><br>
    <textarea name="message"></textarea><br><br>

    <input type="submit" value="Send">
  </form>
</body>
</html>
###The data will appear:
In the URL (address bar of the browser)
-->

<!--EXERCICE2-->
<!DOCTYPE html>
<html>
<head>
  <title>My Form</title>
</head>
<body>
  <h2>Send a Message</h2>
  <form method="POST" action="">
    <label>Name:</label>
    <input type="text" name="name"><br><br>

    <label>Message:</label><br>
    <textarea name="message"></textarea><br><br>

    <input type="submit" value="Send">
  </form>
</body>
</html>

the sent data will appear in the body of the HTTP request , visible only in the Network Tab of your browser's Developer Tools */
//exercice03:
const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    }
  }
};
const jsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log("JSON String (Pretty Printed):");
console.log(jsonMarioGame);

const parsedMarioGame = JSON.parse(jsonMarioGame);
console.log("Parsed Back to JS Object:");
console.log(parsedMarioGame);

debugger;
