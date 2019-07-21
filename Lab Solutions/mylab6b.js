/*
 * getDisplayName
 *
 * @param table {string} - Name of the table
 * @param maxRows {integer} - Max number of records to query
 * @return {array} - Array of record names
 */
function getDisplayName(table, maxRows) {

  if (maxRows == null) {
    maxRows = 10;
  }

  var tableGr = new GlideRecord(table);
  tableGr.setLimit(maxRows);
  tableGr.query();

  var result = [];
  while (tableGr.next()) {
    result.push(tableGr.getDisplayValue());
  }
  return result;
}

function printArray(data) {
  data.forEach(function(elem){
    gs.info(elem);
  });
}

printArray(getDisplayName('incident', 3));
printArray(getDisplayName('sys_user_group', 4));
printArray(getDisplayName('sys_user'));
