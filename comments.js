// Create web server 
// This file is responsible for creating the web server that will serve the comments page to the user. 
// It will also handle the post requests made by the user and save the comments to the database.

const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const sqlite3 = require('sqlite3').verbose();

const server = http.createServer((req, res) => {
    const db = new sqlite3.Database('./database.sqlite');

    if (req.url === '/comments' && req.method === 'GET') {
        db.all('SELECT * FROM comments', (err, rows) => {
            if (err) {
                return console.error(err.message);
            }

            fs.readFile('./comments.html', 'utf8', (err, data) => {
                if (err) {
                    return console.error(err);
                }

                let comments = '';
                rows.forEach((row) => {
                    comments += `<li>${row.comment}</li>`;
                });

                data = data.replace('<!-- comments -->', comments);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
        });
    } else if (req.url ===
