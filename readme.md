# Nodepop API

Nodepop API is a RESTful API that provides basic CRUD operations for items based on second-hand marketplaces.

## Installation

To install Nodepop API, you need to have Node.js and MongoDB installed on your machine. Then follow these steps:

1. Clone this repository: `git clone https://github.com/cmoralejolozano/nodepop-web-api.git`

2. Navigate to the project folder:
```sh
cd nodepop
```
3. Install dependencies:
```sh
npm install
```
4. Start the server in development mode:
```sh
npm run dev
```

## Usage

Nodepop API exposes two endpoints: `/api/items` and `/api/tags`. You can use any HTTP client (such as Postman) to make requests to these endpoints.

Also, you can use `/items` in the browser, where you can even see the images of the different items.

### Items

The `/api/items` endpoint supports GET, POST and DELETE methods for creating, retrieving and deleting items. 
The path `/items` also supports those methods and returns html views in which you could visualize the images.

#### GET /api/items

Returns all the avaible items in JSON format. In the website GET `/items` returns an html view of all the available items.

#### POST /api/items

Creates a new item with the given name and email in JSON format. In the website POST `/items`, an html view will let you know if the request was succesful.

Example request body:

```json
{    
    "name": "iPhone 3GS",
    "for_sale": true,
    "price": 57,
    "image": "iphone.jpg",
    "tags": [ "lifestyle", "mobile"]
}
```

#### DELETE /items/:id

Deletes an existing item by ID. In the website DELETE `/items`, an html view will let you know if the request was succesful.

### Tags

The `/api/tags` endpoint supports GET method for retrieving tags.

#### GET /api/tags

Returns an array of all existing tags in JSON format.

Example response:

```json
{"results":
    [
    "work",
    "lifestyle",
    "mobile",
    "motor"
    ]
}
```