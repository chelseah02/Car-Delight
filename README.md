# WEB103 Project 4 - *Chelsea's Car Delight*

Submitted by: **Chelsea Heredia**

About this web app: **This simple app provides a display of cards which potential cars for a buyer to browse through and interact with for their own car tracking purposes. The user can add new cars they have recently seen, edit information about existing ones, and delete cars they are no longer interested in. The total price of all cars is included in the top as well as an individual breakdown of each car's make, model, year, color, price, and a general image in the details page. **

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomCar` table**
  - [X] **NOTE: Your GIF must include a view of your Railway database that shows the contents of the table used by your app**
- [X] **The web app uses React to display data from the API**
- [X] **Users can view a list of options they can select for different aspects of a `CustomCar`**
- [X] **On selecting each option, the displayed visual icon for the `CustomCar` updates to match the option the user chose**
- [X] **The user can submit their choices to save the car to the list of created `CustomCar`**
- [] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database**
- [X] **The app displays the total price of all features**
- [X] **Users can view a list of all submitted `CustomCar`**
- [X] **Users can edit or delete a submitted `CustomCar` from the list view of submitted `CustomCar`**
- [X] **Users can update or delete `CustomCar` that have been created from the detail page**

Approach: User sees list of cards for each car. They can edit the car for changing different options and select/enter new attributes for the make, model, and more. The color entered by the user is reflected in the visual icon/card for each car as it changes based on what was submitted.

The following **optional** features are implemented:

- [ ] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:
GIF1 shows the PostgreSql connnection, the home page where you see a list of cars and the option to edit, delete them, or view their Read More page. The total price calculated is also present at the top. It also shows the Add Car feature, where once you select your entries, the card is updated and the color of the visual icon card changes based on what is entered. The user can view their choices submitted as a new car to the home screen along with the other list of cars.

GIF2 demonstrates deleting cars from both the list card view and from the car's detail page. THe GIF also shows how you can update car from both its detail page and the home list view as well. It demonstrates how the total price changes based on edits and deletes as well. When changes to the color are made, the outside card icon changes color to visualize the effect.

<img src='https://github.com/chelseah02/Car-Delight/blob/main/Cars-GIF1.gif' title='Video Walkthrough 1' width='' alt='Video Walkthrough 1' />
<img src='https://github.com/chelseah02/Car-Delight/blob/main/Cars-GIF2.gif' title='Video Walkthrough 2' width='' alt='Video Walkthrough 2' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  ScreenToGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.
The only feature I was unable to complete was the feature checking in Adding/Editing a new car to ensure there wouldn't be any invalid entries.

## License

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
