/*
 * getDisplayName
 *
 * @param table {string} - Name of the table
 * @param maxRows {integer} - Max number of records to query
 * @return {array} - Array of record names
 * // Chuck:
 * @return {array} - Array of objects
 * {
 *  "sys_id": <sys_id>,
 *  "display_value": <display value>
 * }
 * To-do: Get the proper JDOC object format...
 */
function getDisplayName(table, maxRows) {

  if ((maxRows == null) ||
   (maxRows && !Number.isInteger(maxRows))){
      maxRows = 10;
  }

  var tableGr = new GlideRecord(table);
  tableGr.setLimit(maxRows);
  tableGr.query();

  var result = [];
  while (tableGr.next()) {

    var data = {};
    data["sys_id"] = tableGr.getUniqueValue();
    data["name"] = tableGr.getDisplayValue();
    result.push(data);

    // var data = [];
    // data.push(tableGr.getUniqueValue());
    // data.push(tableGr.getDisplayValue());
    // result.push(data);
  }
  return result;
}

function printArray(data) {
  gs.info(JSON.stringify(data, null, 4));
  // data.forEach(function(elem){
  //   gs.info(elem);
  // });
}

printArray(getDisplayName('incident', 'three'));
printArray(getDisplayName('sys_user_group', 4));
printArray(getDisplayName('sys_user'));
