# DoWhatDo

**Requirement**

* Ubuntu
* node.js LTS version
* npm@>= 3
* PostgreSQL


## Getting Started

```shell
// Clone project
$ git clone https://github.com/dodotdo/dowhatdo.git

// Edit app config
$ cd dowhatdo/
$ vim conf/app.json

// Initialize
$ chmod u+x scripts/init.sh
$ sudo ./scripts/init.sh

// Run
$ chmod u+x scripts/run.sh
$ sudo ./scripts/run.sh
```


## App config sample

Access token is for create new user.

Make sure config your database.

```json
{
    "port": 9070,
    "db": {
        "type": "postgres",
        "host": "localhost",
        "name": "dowhatdo",
        "user": "your_username",
        "password": "yout_password"
    },
    "sessionSecret": "SECRET_VALUE",
    "accessToken": "SECRET_VALUE"
}
```

## TODO

- Make 'home'(index) page.
- Add authorize on server layer.
- Security.
- Deploy on AWS EC2 instance.
- Unit testing.
