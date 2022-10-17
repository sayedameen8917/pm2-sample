module.exports = {
    apps: [
        {
            name: "pm2-sample",
            script: "index.js",
        },
    ],
    deploy: {
        production: {
            user: "ec2-user",
            host: "52.15.59.249",
            path: "/home/ec2-user/pm2-sample",
            repo: "git@github.com:sayedameen8917/pm2-sample.git",
            ref: "origin/main",
            key: "./kg-test-server-new-keypair.ppk",
            "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
        },
    },
};