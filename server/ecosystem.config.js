module.exports = {
    apps: [{
        name: "e-commerce-api",
        script: "/server/src/server.js",
        instances : "max",
        exec_mode : "cluster",
        watch: true,
        env_development: {
            NODE_ENV: "development"
        }
    }]
}
