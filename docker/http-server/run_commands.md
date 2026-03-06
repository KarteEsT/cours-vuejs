# How to run python commands using the Dockerfile

## Start an http server

1. Build the docker image locally in the Dockerfile folder  
   `docker build -t python-runner .`
2. Run the image with the wanted port in the wanted folder:
   - Under Linux: `docker run --rm -it -p 80:80 -v "$PWD:/app" python-runner python3 -m http.server 80`
   - Under PowerShell: `docker run --rm -it -v "${PWD}:/app" -w /app --entrypoint npm node-runner run dev`
