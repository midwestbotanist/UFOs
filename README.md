# UFOs
Link to GitHub Pages: https://midwestbotanist.github.io/UFOs/static/index.html 

## Overview of Project
The purpose of this project was to gather information on UFO sightings and to insert that information into a dynamic webpage to allow users to filter through a table to find specific sightings. To create this, HTML was written to format the page in an aesthetic matter, CSS to provide style, and JavaScript to allow interactivity. 

## Results
### General Overview of Function Choices:
The ability to interact with this webpage is a key interest-grabber for the user. It makes it easy to find desired information with both a pleasant and easy to understand design. 

Originally the handleClick function was incorporated in the design - being trialed with the date field. Users often look for a button to click to run a search which is why it was first included, however, after adding additional fields all of the buttons detract from the overall design and so we removed the button and chose to use and updateFilters function paired with a filterSearch function.

**JaveScript used for the handleClick:**

![handleClick_function](https://user-images.githubusercontent.com/101941048/203409601-48acd20c-a5d3-424a-a2f4-8d9269d76790.png)

**Resulting webpage design:**

![handleClick_function_practice](https://user-images.githubusercontent.com/101941048/203409624-3b132fd5-0b59-4777-b834-ac83bf949baa.png)


### The End Results of JavaScript and Resulting Webpage:
As said above, the following images are taken from our end code and finished webpage with a filtered result shown. All the user has to do to change their results is to change/clear each filter as needed when they start a new search and run the search by pressing the enter key on the keyboard. This allows for specificity and easy navigation. 

**JavaScript used for updateFilters:**
This function allows the filters to be updated with each new search by only allowing for the specific criteria to be searched for, the filterTable call at the end of the code connects it to the values shown in the table.

![updateFilters_function](https://user-images.githubusercontent.com/101941048/203411495-13dee883-ae37-4703-ac56-4fe3f58551bd.png)  

**JavaScript used for filterTable:**
This function causes the table to show only the results matching the filters called by the updateFilters function.

![filterTable_function](https://user-images.githubusercontent.com/101941048/203411524-a67993e4-26fa-4bda-aa60-e1f95087a171.png)

**Resulting webpage design with date and shape fields being filtered:**
Here the final webpage design with a filtered result can be seen. Each time the user changes the filters on the side and presses enter the table will update itself to show only the results that match the given criteria. Should the user clear all fields and press enter, all the data will be shown in the resulting table as no filters have been applied.

![filter_search_date_shape_table](https://user-images.githubusercontent.com/101941048/203411969-873764db-ce73-4e82-8d41-735ef0c4721d.png)


## Summary 
Overall, this webpage does an excellent job filtering for desired data when only one argument per field is desired. However, it lacks in the ability to search for more than one argument per field. E.g. one cannot search for UFO sightings in both Roswell and Chicago at the same time. Adding an ability for drop down field extension would be a great update to the webpage, in that the user can add additional sections to one field to select for as many cities (or dates, shapes, etc...) as desired. Another update would be to allow for additional filtering between sets of data (e.g. sitings between different dates, or sitings between different regions of the world (Midwest, North America, etc...)). 

Though a user could webscrape to collect the information, it could be a nice bonus to add a field where users can download the data from each filtered search into a csv file. 
