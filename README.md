Dragon Ball Sparking Zero Countdown
Welcome to the Dragon Ball Sparking Zero countdown website! This simple project features a real-time countdown to the game's release date, along with an additional countdown for early access available to Ultimate Edition buyers.

Features
Main Release Countdown: Displays the time remaining until the official release of Dragon Ball Sparking Zero on Friday, 11 October 2024.
Early Access Countdown: An additional countdown for buyers of the Ultimate Edition, who get access 3 days earlier on Tuesday, 8 October 2024.
Dragon Ball Inspired Design: The site’s style uses colors and animations inspired by the Dragon Ball universe, including a gold and orange color scheme and a glowing energy pulse effect on the countdown numbers.

Installation
To run this project locally, follow these steps:

1. Clone the Repository
```bash
git clone https://github.com/your-username/dragon-ball-countdown.git
cd dragon-ball-countdown
```
2. Open the Project
Open the index.html file in your web browser to view the countdown:

```bash
open index.html
```
Project Structure
```bash
dragon-ball-countdown/
│
├── index.html         # Main HTML file for the site
├── styles.css         # CSS file for styling the page
└── script.js          # JavaScript file for countdown functionality
```
Files
index.html: The main structure of the countdown page, containing two countdowns — one for the main release and one for early access.
styles.css: Defines the look and feel of the site, including the colors, fonts, and animation effects inspired by Dragon Ball.
script.js: Contains the logic for the countdown timer, calculating the remaining time until both the early access and official release.
Customization
Changing the Release Date
To modify the countdown dates, update the following variables in script.js:

javascript
```bash
const releaseDate = new Date("Oct 11, 2024 00:00:00").getTime();
const earlyAccessDate = new Date("Oct 08, 2024 00:00:00").getTime();
```
Styling
If you want to customize the visual design, you can modify the styles in styles.css. The current design uses colors inspired by Dragon Ball (orange, blue, and a toned-down gold). You can tweak the color scheme or animations as per your preference.

Contribution
Feel free to contribute to this project by:

Opening an issue for bugs or suggestions.
Forking the project and submitting a pull request with enhancements or bug fixes.
License
This project is licensed under the MIT License. See the LICENSE file for details.


