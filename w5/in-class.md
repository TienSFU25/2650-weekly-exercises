### Redis/caching

Imagine a Book management system used at a Library, where we have the following endpoints

```
GET /books
GET /books:id
PATCH /book:id
POST /book
DEL /book:id
```

The Book schema is simple

```
id: ID
title: String
author: String
quantity: Number
```

As you'd expect, `quantity` is the only field you can modify in a Book.

a. Write in your own words, a caching mechanism for these 5 endpoints using the **write-through** strategy. Is it worth caching the GET /books endpoint? Explain pros and cons and relate to how you think this system would be used IRL

b. Describe how each of the endpoints interact with the cache. Explain clearly where the invalidations happen

```
GET /books
GET /books:id
PATCH /book:id
POST /book
DEL /book:id
```
