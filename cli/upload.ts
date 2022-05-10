const token = Deno.env.get('API_TOKEN');
const data = JSON.stringify({
  branch: "default",
  modules: {
    main: Deno.readFileSync('./dist/loop.js')
  }
});

const headers = new Headers({
  "Content-Type": "application/json; charset=utf-8",
      "X-Token": token,
})
fetch('https://screeps.com/api/user/code', {
  method: "POST",
  body: data,
  headers
});
