var TEAM_COUNT = 5;
var PEOPLE_COUNT = 4;

//
// Create the teams
//
gs.info('Roster:');
for (var i=1; i<TEAM_COUNT; i++) {

  //
  // Create the people
  //
  var teamId = i;
  gs.info('Team number: ' + teamId);

  for (var j=1; j<PEOPLE_COUNT; j++) {

    var personId = (i-1)*5+(j);
    var uniqueId = teamId + '-' + personId;
    gs.info('Person number: ' + personId +
      ', unique identifier: ' + uniqueId);
  }
  // Don't save nothing
}
