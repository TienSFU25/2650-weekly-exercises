## Redis

Make sure you have Redis installed.

https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/

### Note for Windows folks
If you are on Windows, you'll need to install WSL

https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/

Press the Windows key, run "Ubuntu" and start `redis-server`

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/04c82c4a-5bf6-4e17-b3f9-5491bd4fcc86)

This should make Redis available on port `6379`. Skip to the section `Connect Express with Redis` below and things should work

**If you want to write code in the Ubuntu subsystem** remember that Ubuntu is a "subsystem" on its own, that just happens to sit in the Windows OS. All your node versions, npm versions would be different.

Your typical workflow for developing in Ubuntu-land would be

1. Opening up a Ubuntu terminal

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/8723005c-6f8c-4b9a-a6f8-12801f0696c4)

2. `cd` to wherever

3. `code .`

This will open up VS Code, and allow you to write code for the Ubuntu subsystem, using the VS Code UI

More info here: https://code.visualstudio.com/learn/develop-cloud/wsl

#### Virtualbox

If WSL is not cutting it, or you want "real" Linux experience, try Virtualbox. It lets you allocate disk space on your local machine to run a guest OS.

https://www.virtualbox.org/wiki/Downloads

You can find Ubuntu ISO here: https://ubuntu.com/download/desktop

I have tested this out and confirmed that you can run `redis-server` with `node` with a Ubuntu VM.

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/6700da3f-71cd-4754-aa53-dd0312e6a801)

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/f8377aa3-6393-4b71-a64b-0a990b44ef1d)

### Connect Express with Redis

```js
import redis from "redis";

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

await redisClient.set("foo", "bar");
const cachedData = await redisClient.get("foo");

console.log(cachedData);
```

Read through this guide.

https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-using-redis

### The actual exercise
Lets mock some Mongo functions. Using the Mongo stuff you learned last week (with the `sample_mflix` dataset), create a Node server with endpoints for the following

1. /movies Get the first 10 Movies
2. /movie:id Get one Movie by its ID
3. PATCH /movie:id Update one Movie's title by its ID
4. DEL /movie:id Delete a movie by its ID

You could start with the Node skeleton repo: https://github.com/TienSFU25/2650-express-starter

Now, integrate a caching mechanism onto these 4 endpoints. We want to do both write-through and cache-aside. Think about how this is going to be done

- What should the cache store? The Movie object in Mongo is pretty large, for the sake of this exercise lets pretend all we care about for a Movie are its id, name, title
- When should we write to the cache? If we just grabbed Movie 5, do we need to visit the DB to get Movie 5 again?
- When should we invalidate the cache? Assume nothing else interacts from this Mongo database, and Movies are only changed through our Mongo function above

## Postman

Sign up for Postman. Figure out a way to blackbox test the caching performance above

Hint: querying MongoDB Atlas for me takes 50ms

![alt text](image-1.png)

while querying Redis takes 5ms

![alt text](image-2.png)

So there must be a way to test that

- the first Movie fetch takes about 50ms
- fetching the same Movie takes on the order of 5ms instead

You can use `pm.response.responseTime`

https://learning.postman.com/docs/writing-scripts/script-references/test-examples/#test-response-times

Add Jamie as a contributor to your Postman Workspace: jsam07@hotmail.com

![alt text](image.png)

## Submission

1. Github link to the Redis exercise
2. Postman workspace shared with Jamie's account

## Grading

- 3/3: "nice!"
  - Exceptional work with all tasks completed satisfactorily according to the specification
  - Efficient, well-designed, and well-coded
- 2/3: "satisfactory"
  - Most tasks completed, but a few key things missing
  - Some inefficiencies in the implementation, or deviation from the specification
- 1/3: "it barely works"
  - Some progress made, but major deficiencies in solution
  - Many tasks missed or major deviation from specification
- 0/3: "you didn't do much"
  - Little or no progress
  - Few points from specification implemented

Note that up to -0.5 may be deducted for improper hand in, disorganized files or code, etc. Please ask me if in doubt.
