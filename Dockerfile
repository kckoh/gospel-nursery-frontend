# naming the build stage as build-stage
FROM node:16.13.0-alpine as build-stage
# Create a app folder
RUN mkdir /app
WORKDIR /app

COPY package*.json /app/
RUN yarn 
# Copy the rest of the files
COPY . /app/
# Build the app for production
RUN yarn build

# If there is no tag, it uses the latest
FROM nginx

# work dir 고정
WORKDIR /app

# # work dir 에 build 폴더 생성 /app/build
# # RUN mkdir ./build

# # host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
# # ADD ./build ./build

# Copy the build files from build-stage to the container
COPY --from=build-stage /app/dist/ /app
# delete default.conf 
# RUN rm /etc/nginx/conf.d/default.conf

# copy the nginx.conf from the host computer to the container nginx.conf 
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

# Start the command when the container starts
CMD ["nginx", "-g", "daemon off;"]
