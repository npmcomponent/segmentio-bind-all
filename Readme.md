*This repository is a mirror of the [component](http://component.io) module [segmentio/bind-all](http://github.com/segmentio/bind-all). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/segmentio-bind-all`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# bind-all

  Create singletons from objects.

## Installation

    $ component install segmentio/bind-all
    $ npm install bind-all

## API

```javascript
function User () {
  this.x = 4;
}

User.prototype.y = function () {
  return this.x;
};

var user = bindAll(new User());

user.y.apply(this); // 4
```

## License

  MIT
