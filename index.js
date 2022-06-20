const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    const data = {
        "products": [
            {
                "name": "Red Bench",
                "category": "people",
                "price": 3.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": true,
                "featured": false,
                "details": null
            },
            {
                "name": "Egg Balloon",
                "category": "food",
                "price": 93.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Man",
                "category": "people",
                "price": 100,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Architecture",
                "category": "landmarks",
                "price": 101,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Red Bench",
                "category": "people",
                "price": 3.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": true,
                "featured": false,
                "details": null
            },
            {
                "name": "Egg Balloon",
                "category": "food",
                "price": 93.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Man",
                "category": "people",
                "price": 100,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Architecture",
                "category": "landmarks",
                "price": 101,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Red Bench",
                "category": "people",
                "price": 3.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": true,
                "featured": false,
                "details": null
            },
            {
                "name": "Egg Balloon",
                "category": "food",
                "price": 93.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Man",
                "category": "people",
                "price": 100,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Architecture",
                "category": "landmarks",
                "price": 101,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Red Bench",
                "category": "people",
                "price": 3.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": true,
                "featured": false,
                "details": null
            },
            {
                "name": "Egg Balloon",
                "category": "food",
                "price": 93.89,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Man",
                "category": "people",
                "price": 100,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Architecture",
                "category": "landmarks",
                "price": 101,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": false,
                "details": null
            },
            {
                "name": "Samurai King Restling",
                "category": "pets",
                "price": 101,
                "currency": "USD",
                "image": {
                    "src": "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "alt": ""
                },
                "bestseller": false,
                "featured": true,
                "details": {
                    "dimmentions": {
                        "width": 1020,
                        "height": 1020
                    },
                    "size": 15000,
                    "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
                    "recommendations": [
                        {
                            "src": "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "alt": ""
                        },
                        {
                            "src": "https://images.pexels.com/photos/22221/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
                            "alt": ""
                        },
                        {
                            "src": "https://images.pexels.com/photos/1429395/pexels-photo-1429395.jpeg?auto=compress&cs=tinysrgb&w=600",
                            "alt": ""
                        }
                    ]
                }
            }
        ]
    };
    res.send(data);
})

const { PORT } = process.env;

const port = PORT || 5000;

app.listen(port, () => console.log(`app started on port ${port}`));