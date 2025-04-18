# Library Management System API Documentation
# //còn sửa comment , chapter,....
Base URL: `http://localhost:3000`

## Book APIs

        ### Get all books
- **GET** `/api/books`
- Response: List of all books
- Status: 200 OK

        ### Get book by ID
- **GET** `/api/books/:id`
- Response: Single book details
- Status: 200 OK

        ### Add new book
- **POST** `/api/books/add`
- Headers: Authorization Bearer Token (Admin only)
- Body:
```json
{
    "name": "string",
    "img": "string",
    "authorId": "number",
    "genreId": "number",
    "describe": "string"
}
```
- Status: 201 Created

        ### Update book
- **PUT** `/api/books/:id`
- Headers: Authorization Bearer Token (Admin only)
- Body: {
    "name": "string",
    "img": "string",
    "authorId": "number",
    "genreId": "number",
    "describe": "string"
}
- Status: 200 OK

        ### Delete book
- **DELETE** `/api/books/:id`
- Headers: Authorization Bearer Token (Admin only)
- Status: 200 OK

## Bookmark APIs

        ### Add bookmark
- **POST** `/api/books/save`
- Headers: Authorization Bearer Token
- Body:
```json
{
    "idBook": "number"
}
```
- Status: 201 Created

        ### Get user bookmarks
- **GET** `/api/books/save/:userId`
- Headers: Authorization Bearer Token
- Status: 200 OK

        ### Remove bookmark
- **DELETE** `/api/books/save/:id`
- Headers: Authorization Bearer Token
- Status: 200 OK

## Review APIs

        ### Add review
- **POST** `/api/books/review`
- Headers: Authorization Bearer Token
- Body:
```json
{
    "idBook": "number",
    "comment": "string",
    "rate": "number"
}
```
- Status: 201 Created

        ### Get book reviews
- **GET** `/api/books/:id/reviews`
- Status: 200 OK

        ### Update review
- **PUT** `/api/books/review/:id`
- Headers: Authorization Bearer Token
- Body:
```json
{
    "comment": "string",
    "rate": "number"
}
```
- Status: 200 OK

        ### Delete review
- **DELETE** `/api/books/review/:id`
- Headers: Authorization Bearer Token
- Status: 200 OK

## Chapter APIs

    ### Get book chapters
- **GET** `/api/chapters/:idBook/chapters`
- Response: List of chapter IDs and titles
- Status: 200 OK

    ### Get chapter content
- **GET** `/api/chapters/:idBook/chapters/:chapter`
- Response: Chapter content
- Status: 200 OK

    ### Add chapter
- **POST** `/api/chapters/:idBook/chapters`
- Headers: Authorization Bearer Token (Admin only)
- Body:
```json
{
    "chapter": "number",
    "content": "string"
}
```
- Status: 201 Created

    ### Update chapter
- **PUT** `/api/chapters/:idBook/chapters/:chapter`
- Headers: Authorization Bearer Token (Admin only)
- Body:
```json
{
    "content": "string",
    "newChapterNumber": "number" // Optional
}
```
- Status: 200 OK

    ### Delete chapter
- **DELETE** `/api/chapters/:idBook/chapters/:chapter`
- Headers: Authorization Bearer Token (Admin only)
- Status: 200 OK

## History APIs

        ### Get reading history
- **GET** `/api/books/history/:userId`
- Headers: Authorization Bearer Token
- Status: 200 OK

        ### Update reading history
- **POST** `/api/books/history`
- Headers: Authorization Bearer Token
- Body:
```json
{
    "idBook": "number",
    "location": "string",
    "chapter": "string",
    "complete": "boolean",
    "value": "number"
}
```
- Status: 201 Created

        ### Delete reading history
- **DELETE** `/api/books/history/:id`
- Headers: Authorization Bearer Token
- Status: 200 OK

## Authentication APIs

        ### Login
- **POST** `/api/auth/login`
- Body:
```json
{
    "username": "string",
    "password": "string"
}
```
- Response:
```json
{
    "token": "string",
    "user": {
        "id": "number",
        "username": "string",
        "email": "string",
        "role": "string"
    }
}
```
- Status: 200 OK

        ### Register
- **POST** `/api/auth/register`
- Body:
```json
{
    "username": "string",
    "email": "string",
    "password": "string",
    "name": "string"
}
```
- Status: 201 Created

## User APIs

        ### Get user profile
- **GET** `/api/users/profile`
- Headers: Authorization Bearer Token
- Status: 200 OK

        ### Update user profile
- **PUT** `/api/users/profile`
- Headers: Authorization Bearer Token
- Body:
```json
{
    "name": "string",
    "email": "string",
    "image": "string"
}
```
- Status: 200 OK

## Author APIs

        ### Get all authors
- **GET** `/api/authors`
- Status: 200 OK

        ### Get author by ID
- **GET** `/api/authors/:id`
- Status: 200 OK

        ### Add author
- **POST** `/api/authors`
- Headers: Authorization Bearer Token (Admin only)
- Body:
```json
{
    "name": "string",
    "biography": "string"
}
```
- Status: 201 Created

        ### Update author
- **PUT** `/api/authors/:id`
- Headers: Authorization Bearer Token (Admin only)
- Body:
```json
{
    "name": "string",
    "biography": "string"
}
```
- Status: 200 OK

        ### Delete author
- **DELETE** `/api/authors/:id`
- Headers: Authorization Bearer Token (Admin only)
- Status: 200 OK

## Genre APIs

        ### Get all genres
- **GET** `/api/genres`
- Status: 200 OK

        ### Get genre by ID
- **GET** `/api/genres/:id`
- Status: 200 OK

        ### Add genre
- **POST** `/api/genres`
- Headers: Authorization Bearer Token (Admin only)
- Body:
```json
{
    "name": "string",
    "description": "string"
}
```
- Status: 201 Created

        ### Update genre
- **PUT** `/api/genres/:id`
- Headers: Authorization Bearer Token (Admin only)
- Body:
```json
{
    "name": "string",
    "description": "string"
}
```
- Status: 200 OK

        ### Delete genre
- **DELETE** `/api/genres/:id`
- Headers: Authorization Bearer Token (Admin only)
- Status: 200 OK