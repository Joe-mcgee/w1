var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function idNameMap(data) {
  var output = {};
  for (user in data) {
    output[user] = data[user]['name'];
  }
  return output;
}

function followedBy(data, person) {
  var output = [];
  var mappedPerson = person;
  mapVar = idNameMap(data);
  for (key in mapVar) {
    if (mapVar[key] === mappedPerson) { mappedPerson = key; }
  }
  for (user in data) {
    var followersArray = data[user]['follows'];
    followersArray.forEach(function(person, i) {
      if (person === mappedPerson) {
        output.push(data[user]['name']);
      }
    });


  }
  return output;
}

function listNamesAndFollowers(data) {
  var output = {};
  var mapVar = idNameMap(data);
  for (user in data) {
    var age = data[user]['age'];
    var followArray = data[user]['follows'];
    var toPerson = followArray.map(x => mapVar[x]);
    output[data[user]['name']] = { 'follows': toPerson, 'followed By': followedBy(data, data[user]['name']), 'age': age };


    /*output[data[user]['name']['followers']] = toPerson;*/
  }
  return output;
}

function biggestFollower(data) {
  var output;
  var topDog = 0;
  for (user in data) {
    // points to follows array
    var pointer = data[user]['follows'];
    if (pointer.length > topDog) {
      output = data[user];
      topDog = pointer.length;
    }
  }
  return output;
}

function biggestFollowerOver30(data) {
  var output;
  var topDog = 0;
  for (user in data) {
    // points to follows array
    var pointer = data[user]['follows'];
    if (data[user]['age'] > 30) {
      if (pointer.length > topDog) {
        output = data[user];
        topDog = pointer.length;
      }
    }
  }
  return output;
}

function mostPopular(data) {
  var output;
  var relationshipMap = listNamesAndFollowers(data);
  console.log(relationshipMap);
  var topDog = 0;
  for (user in relationshipMap) {
    // points to followed by array
    var pointer = relationshipMap[user]['followed By'];
    if (pointer.length > topDog) {
      output = user;
      topDog = pointer.length;
    }
  }
  return output;
}

function mostPopularOver30(data) {
  var output;
  var relationshipMap = listNamesAndFollowers(data);
  var topDog = 0;
  for (user in relationshipMap) {
    // points to followed by array
    var pointer = relationshipMap[user]['followed By'];
    console.log(relationshipMap[user]['age']);
    if (relationshipMap[user]['age'] > 30) {
      if (pointer.length > topDog) {
        output = user;
        topDog = pointer.length;
      }
    }

  }
  return output;
}

Array.prototype.diff = function(a) {
  return this.filter(function(i) { return a.indexOf(i) < 0; });
};



function oneWayRelationships(data) {
  output = [];
  var relationshipMap = listNamesAndFollowers(data);
  for (user in relationshipMap) {
    var follows = relationshipMap[user]['follows'];
    var followers = relationshipMap[user]['followed By'];
    var difference = follows.diff(followers);
    output.push(user + ' has a one way with ' + difference);

  }
  return output;
}


function reach(data) {
  stringForOutput = '';
  output = [];
  var relationshipMap = listNamesAndFollowers(data);
  for (user in relationshipMap) {
    var follows = relationshipMap[user]['follows'];
    stringForOutput += (user + ' has a reach of: ');
    var reach = follows.length;
    for (follower of follows) {
      reach += relationshipMap[follower]['follows'].length;

    }
    stringForOutput += reach;
    output.push(stringForOutput);
    stringForOutput = '';
  }
  return output;
}

console.log(reach(data));
