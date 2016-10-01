Simple tool for choosing how much detail to log to the console. Syntax inspired by logit.


## Usage

```js
var LogStuff = require('log-stuff');
var log = new LogStuff('WARN'); //set your log level here

//these are all the 6 levels
log.error('an error message');
log.warn('a warning message');
log.info('an information message');
log.debug('some debug details');
log.finer('some finer debug details');
log.finest('the finest debug details');
```

...would output this on stdout:

```
ERROR: an error message
WARN: a warning message
```

There's also something you can use to show a progress bar or counter. It's one line, always kept below the other logs (uses single-line-log) and gets displayed in all logging levels.

```js
log.error('an error');
log.progress('1 call');
log.warn('a warning');
log.progress('2 call');
```

would output:

```
ERROR: an error
WARN: a warning
2 call
```
