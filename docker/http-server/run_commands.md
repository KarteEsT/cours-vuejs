# How to run python commands using the Dockerfile

Launch an HTTP server on the port 80.

## Start an http server

1. Build the docker image locally in the Dockerfile folder  
   `docker build -t python-http-server .`
2. Run the image with the wanted port in the wanted folder:
   - Under Linux: `docker run --rm -it -p 80:80 -v "$PWD:/app" python-http-server`
   - Under PowerShell: `docker run --rm -it -p 80:80 -v "${pwd}:/app" python-http-server`
