If you are on Windows, you have three options

### Install WSL
https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/

Press the Windows key, run "Ubuntu" and start `redis-server`

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/04c82c4a-5bf6-4e17-b3f9-5491bd4fcc86)

This should make Redis server available on port `6379`.

**If you want to write code in the Ubuntu subsystem** remember that Ubuntu is a "subsystem" on its own, that just happens to sit in the Windows OS. All your node versions, npm versions would be different.

Your typical workflow for developing in Ubuntu-land would be

1. Opening up a Ubuntu terminal

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/8723005c-6f8c-4b9a-a6f8-12801f0696c4)

2. `cd` to wherever

3. `code .`

This will open up VS Code, and allow you to write code for the Ubuntu subsystem, using the VS Code UI

More info here: https://code.visualstudio.com/learn/develop-cloud/wsl

### Docker

We haven't covered Docker in this course yet, so you'll need to install the Docker client. You'll need to run a `redis` container and expose the `6379` port

`docker run -p 6379:6379 --name my-redis-container -d redis`

### Virtualbox

If WSL is not cutting it, or you want "real" Linux experience, try Virtualbox. It lets you allocate disk space on your local machine to run a guest OS.

https://www.virtualbox.org/wiki/Downloads

You can find Ubuntu ISO here: https://ubuntu.com/download/desktop

I have tested this out and confirmed that you can run `redis-server` with `node` with a Ubuntu VM.

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/6700da3f-71cd-4754-aa53-dd0312e6a801)

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/f8377aa3-6393-4b71-a64b-0a990b44ef1d)
