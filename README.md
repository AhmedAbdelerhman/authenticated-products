# Pokemon-KIB-Challenge

This project is a CRUD (Create, Read, Update, Delete) application built using Nest.js and TypeORM. It provides API endpoints to manage Pokemon data.


## Requirements
  -  Docker ( Docker Compose)
  -  Postman ( postman collection in the project )

## Architecture
1. nest.js app container (APIs)
2. mssql db container
3. init db container (the container that creates the pokemon db after the 20s of mssql db container)
  
## Setup
  1. Clone the repository:

   git clone https://github.com/AhmedAbdelerhman/pokemon-kib

## Running the Application
1. open termenal in code dirctory 
2. docker copmose up --build
   - the app will be accessible from url http://localhost:8080
3. wait 20 seconds to init the database pokemon
## Example Request and Response
 
 
 ### post reqest
```
  
   POST http://localhost:8080/pokemon
   Content-Type: application/json

{

"name":  "Bulbasaur",

"pokedexNumber":  1,

"imgName":  1,

"generation":  1,

"evolutionStage":  "1",

"evolved":  false,

"familyID":  1,

"crossGen":  false,

"type1":  "grass",

"type2":  "poison",

"weather1":  "Sunny/clear",

"weather2":  "Cloudy",

"statTotal":  326,

"ATK":  118,

"DEF":  118,

"STA":  90,

"legendary":  false,

"acquirable":  true,

"spawns":  true,

"regional":  false,

"raidable":  false,

"hatchable":  true,

"shiny":  false,

"nest":  false,

"new":  true,

"notGettable":  false,

"futureEvolve":  false,

"cpAt40":  981,

"cpAt39":  967

}
   
   ### post response 


{

"status":  201,

"message":  "saved successfully",

"data":  {

"id":  805,

"name":  "Bulbasaur",

"pokedexNumber":  1,

"imgName":  1,

"generation":  1,

"evolutionStage":  "1",

"evolved":  false,

"familyID":  1,

"crossGen":  false,

"type1":  "grass",

"type2":  "poison",

"weather1":  "Sunny/clear",

"weather2":  "Cloudy",

"statTotal":  326,

"ATK":  118,

"DEF":  118,

"STA":  90,

"legendary":  false,

"acquirable":  true,

"spawns":  true,

"regional":  false,

"raidable":  false,

"hatchable":  true,

"shiny":  false,

"nest":  false,

"new":  true,

"notGettable":  false,

"futureEvolve":  false,

"cpAt40":  981,

"cpAt39":  967,

"created_at":  "2023-07-28T13:05:42.576Z",

"updated_at":  "2023-07-28T13:05:42.576Z"

}

}
   ```

 
 ### get reqest find all 
```
  
   get http://localhost:8080/pokemon?limit=10&page=1
   Content-Type: application/json


   
   ### get response 


{

"status":  200,

"message":  "succuss",

"meta":  {

"total":  804,

"per_page":  10,

"total_pages":  81,

"current_page":  1

},

"data":  [

{

"id":  805,

"name":  "Bulbasaur",

"pokedexNumber":  1,

"imgName":  1,

"generation":  1,

"evolutionStage":  "1",

"evolved":  false,

"familyID":  1,

"crossGen":  false,

"type1":  "grass",

"type2":  "poison",

"weather1":  "Sunny/clear",

"weather2":  "Cloudy",

"statTotal":  326,

"ATK":  118,

"DEF":  118,

"STA":  90,

"legendary":  false,

"acquirable":  true,

"spawns":  true,

"regional":  false,

"raidable":  false,

"hatchable":  true,

"shiny":  false,

"nest":  false,

"new":  true,

"notGettable":  false,

"futureEvolve":  false,

"cpAt40":  981,

"cpAt39":  967,

"created_at":  "2023-07-28T13:05:42.576Z",

"updated_at":  "2023-07-28T13:05:42.576Z"

},

{

"id":  804,

"name":  "Magearna",

"pokedexNumber":  801,

"imgName":  801,

"generation":  7,

"evolutionStage":  "Evolved",

"evolved":  false,

"familyID":  null,

"crossGen":  false,

"type1":  "steel",

"type2":  "fairy",

"weather1":  "Snow",

"weather2":  "Cloudy",

"statTotal":  631,

"ATK":  246,

"DEF":  225,

"STA":  160,

"legendary":  true,

"acquirable":  false,

"spawns":  false,

"regional":  false,

"raidable":  false,

"hatchable":  false,

"shiny":  false,

"nest":  false,

"new":  false,

"notGettable":  false,

"futureEvolve":  false,

"cpAt40":  3340,

"cpAt39":  3293,

"created_at":  "2023-07-28T10:29:58.080Z",

"updated_at":  "2023-07-28T10:29:58.080Z"

},




]

}
   ```


 ### get reqest findone 
```
  
   get http://localhost:8080//pokemon/805
   Content-Type: application/json


   
   ### get response 

{

"status":  200,

"message":  {

"id":  805,

"name":  "Bulbasaur",

"pokedexNumber":  1,

"imgName":  1,

"generation":  1,

"evolutionStage":  "1",

"evolved":  false,

"familyID":  1,

"crossGen":  false,

"type1":  "grass",

"type2":  "poison",

"weather1":  "Sunny/clear",

"weather2":  "Cloudy",

"statTotal":  326,

"ATK":  118,

"DEF":  118,

"STA":  90,

"legendary":  false,

"acquirable":  true,

"spawns":  true,

"regional":  false,

"raidable":  false,

"hatchable":  true,

"shiny":  false,

"nest":  false,

"new":  true,

"notGettable":  false,

"futureEvolve":  false,

"cpAt40":  981,

"cpAt39":  967,

"created_at":  "2023-07-28T13:05:42.576Z",

"updated_at":  "2023-07-28T13:05:42.576Z"

 }
}
   ```
   
 ### delete reqest 

   ```

  
   delete http://localhost:8080/pokemon/800 
   Content-Type: application/json


   
   ### delete response 
{

"status":  200,

"message":  "element with id = 800 deleted successfully"

}
   ```

 ### patch reqest 

   ```

  
   patch http://localhost:8080/pokemon/1 
   Content-Type: application/json


{

"name":  "Charizard",

"pokedexNumber":  6,

"imgName":  6,

"generation":  1,

"evolutionStage":  "Final",

"evolved":  true,

"familyID":  6,

"crossGen":  true,

"type1":  "Fire",

"type2":  "Flying",

"weather1":  "Sunny/clear",

"weather2":  "Windy",

"statTotal":  534,

"ATK":  223,

"DEF":  173,

"STA":  138,

"legendary":  true,

"acquirable":  true,

"spawns":  true,

"regional":  false,

"raidable":  true,

"hatchable":  true,

"shiny":  true,

"nest":  false,

"new":  false,

"notGettable":  false,

"futureEvolve":  false,

"cpAt40":  2889,

"cpAt39":  2843

}

   
   ### patch response 
{

"status":  200,

"message":  "element with id = 1 updated successfully",

"data":  {

"id":  1,

"name":  "Charizard",

"pokedexNumber":  6,

"imgName":  6,

"generation":  1,

"evolutionStage":  "Final",

"evolved":  true,

"familyID":  6,

"crossGen":  true,

"type1":  "Fire",

"type2":  "Flying",

"weather1":  "Sunny/clear",

"weather2":  "Windy",

"statTotal":  534,

"ATK":  223,

"DEF":  173,

"STA":  138,

"legendary":  true,

"acquirable":  true,

"spawns":  true,

"regional":  false,

"raidable":  true,

"hatchable":  true,

"shiny":  true,

"nest":  false,

"new":  false,

"notGettable":  false,

"futureEvolve":  false,

"cpAt40":  2889,

"cpAt39":  2843,

"created_at":  "2023-07-28T10:29:49.263Z",

"updated_at":  "2023-07-28T13:06:22.720Z"

}

}
   ```
