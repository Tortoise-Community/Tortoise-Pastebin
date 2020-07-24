module.exports = {
  apps : [{
    name        : "paste",
    script      : "./server.js",
    watch       : true,
   ignore_watch : ["node_modules", "data", "static/application.min.js", "static/highlight.min.js"]
  }]
}
