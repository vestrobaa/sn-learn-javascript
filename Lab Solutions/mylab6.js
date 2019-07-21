/*
 * getDisplayName
 *
 * @param table {string} - Name of the table
 * @return {array} - Array of record names
 */
function getDisplayName(table){

  var tableGr = new GlideRecord(table);
  tableGr.query();

  var result = [];
  while (tableGr.next()) {
    result.push(tableGr.getDisplayValue());
  }
  return result;
}

var names = getDisplayName('incident');

names.forEach(function(elem){
  gs.info(elem);
});
