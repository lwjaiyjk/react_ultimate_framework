module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        // First application
        {
            name: 'react_ultimate_framework',
            script: 'release/server.js',
            instances: 2,
            error_file:"./logs/app-err.log",//错误输出日志
            out_file:"./logs/app-out.log",  //日志
            log_date_format:"YYYY-MM-DD HH:mm Z", //日期格式
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: 'xiangsheng',
            host: [
                {
                    "host": "120.55.94.127",
                    "port": "6677"
                }
            ],
            "post-setup": "ls -la",
            ref: 'origin/master',
            repo: 'https://github.com/wuyanwuyan/react_ultimate_framework.git',
            path: '/home/xiangsheng/react_ultimate_framework',
            'post-deploy': 'yarn install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
        },
        dev: {
            user: 'node',
            host: 'localhost',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/development',
            'post-deploy': 'yarn install && npm run build && pm2 reload ecosystem.config.js --env dev',
            env: {
                NODE_ENV: 'dev'
            }
        }
    }
};