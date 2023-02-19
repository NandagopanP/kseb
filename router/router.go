package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sreehari2003/kseb/docs"

	swaggerFiles "github.com/swaggo/files"

	ginSwagger "github.com/swaggo/gin-swagger"
)

func CreateRoute() *gin.Engine {
	docs.SwaggerInfo.Title = "KSEB"
	docs.SwaggerInfo.Description = "KSEB app development"
	docs.SwaggerInfo.Version = "1.0"
	docs.SwaggerInfo.Host = "petstore.swagger.io"
	docs.SwaggerInfo.BasePath = "/"
	docs.SwaggerInfo.Schemes = []string{"http", "https"}

	router := gin.Default()
	// use ginSwagger middleware to serve the API docs
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.GET("/", func(c *gin.Context) {
		res := map[string]interface{}{
			"data": "Server is up and running",
			"ok":   true,
		}
		c.JSON(http.StatusOK, res)
	})
	return router
}
