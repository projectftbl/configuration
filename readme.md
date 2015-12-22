## @ftbl/configuration

Configuration helper with sane defaults. 

### File structure

Set your configuration data into this structure:

```
config
  default.json
  development.json
  test.json
  production.json
```

Override default configuration from ```default.json``` in ```<env>.json```.

### Usage

Ensure configuration uses ALL CAPS for setting names (to match environment variables).

Given this configuration file:

```json
{
  "SETTING": 123
, "NESTED": {
    "SETTING": "abc"
  }
}
```

To retrieve configuration settings:

```javascript
var configuration = require('@ftbl/configuration');

var setting = configuration('setting');
// setting === 123

var nested = configuration('nested:setting');
// nested === 'abc'
```