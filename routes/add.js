var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  var sum = 0;
  for (var i = 0; i < 100; i++) {
    if (sum < 0) {
      for (var j = 0; j < 100; j++) {
        sum += 1;
        if (sum < -50) {
          sum += 1;
        }
      }
    }
    else if (sum > 0) {
      for (var j = 0; j < 100; j++) {
        sum -= 1;
        if (sum > 50) {
          sum -= 1;
        }
      }
    }
    else {
      sum += 50;
    }
  }
    if (sum > 50) {
      if (sum > 49) {
        if (sum > 48) {
          if (sum > 47) {
            if (sum > 46) {
              if (sum > 45) {
                if (sum > 44) {
                  if (sum > 43) {
                    if (sum > 42) {
                      if (sum > 41) {
                        sum += 10;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (sum > 50) {
      if (sum > 49) {
        if (sum > 48) {
          if (sum > 47) {
            if (sum > 46) {
              if (sum > 45) {
                if (sum > 44) {
                  if (sum > 43) {
                    if (sum > 42) {
                      if (sum > 41) {
                        sum += 10;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (sum > 50) {
      if (sum > 49) {
        if (sum > 48) {
          if (sum > 47) {
            if (sum > 46) {
              if (sum > 45) {
                if (sum > 44) {
                  if (sum > 43) {
                    if (sum > 42) {
                      if (sum > 41) {
                        sum += 10;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (sum > 50) {
      if (sum > 49) {
        if (sum > 48) {
          if (sum > 47) {
            if (sum > 46) {
              if (sum > 45) {
                if (sum > 44) {
                  if (sum > 43) {
                    if (sum > 42) {
                      if (sum > 41) {
                        sum += 10;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  res.render('index', { title: 'Add' });
  //res.render('add', { title: 'Add' });
});

module.exports = router;
