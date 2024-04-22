const { json } = require("express");
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

function setupSwaggerDocs(app) {
    var swaggerOptions = {
        "definition": {
            "openapi": "3.0.1",
            "info": {
                "title": "Vetnexus API Documentation",
                "version": "0.1.0",
                "description": "This is a API Documentation for Vetnexus",
                "license": {
                    "name": "MIT",
                    "url": "https://spdx.org/licenses/MIT.html"
                },
                "contact": {
                    "name": "Vetnexus",
                    "url": "https://www.vetnexus.com.au/",
                    "email": "info@vetnexus.com"
                }
            },
            "servers": [
                {
                    "url": "http://localhost:3000"
                }
            ],
            "components": {
                "securitySchemes": {
                    "bearerAuth": {
                        "type": "http",
                        "scheme": "bearer",
                        "bearerFormat": "JWT"
                    },
                    "basicAuth": {
                        "type": "http",
                        "scheme": "basic"
                    }
                }
            },
            "security": [
                {
                    "bearerAuth": []
                },
                {
                    "basicAuth": []
                }
            ]
        },
        // include all with yaml
        "apis": ["./src/routes/*.js", "./src/documentation/*.yaml", "./src/models/*.js", "./src/controllers/*.js", "./src/middleware/*.js"],
    };
    const specs = swaggerJsdoc(swaggerOptions);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    );
}

module.exports = setupSwaggerDocs;