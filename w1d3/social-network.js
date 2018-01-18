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
    output[user] = data[user]['name']
  }
  return output
}

function followedBy(data, person) {
  var output = []
  var mappedPerson = person
  mapVar = idNameMap(data)
  for (key in mapVar) {
    if (mapVar[key] == mappedPerson)
      mappedPerson = key
  }
  for (user in data) {
    var followersArray = data[user]['follows'];
    followersArray.forEach(function(person, i) {
      if (person == mappedPerson) {
        output.push(data[user]['name'])
      }
    });


}
return output;
}



function listNamesAndFollowers(data) {
  var output = {};
  var mapVar = idNameMap(data);
  for (user in data) {
    var followArray = data[user]['follows'];
    var toPerson = followArray.map(x => mapVar[x]);
    output[data[user]['name']] = {'followers': toPerson, 'followed': followedBy(data, data[user]['name'])};


    /*output[data[user]['name']['followers']] = toPerson;*/
  }
  return output;
}








console.log(listNamesAndFollowers(data));
