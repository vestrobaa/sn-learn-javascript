/*
 * Script Include
 */
var RecordFinderUtil = Class.create();
RecordFinderUtil.prototype = {
    initialize: function() {
    },

  /*
   * Get the records display names
   *
   * @param table {string} - Name of the table
   * @param limit {integer} - Max number of records to query
   * @return {array} - Array of objects
   * {
   *  "sys_id": <sys_id>,
   *  "display_value": <display value>
   * }
   */
  getDisplayNames: function(table, limit) {

    var tableGr = new GlideRecord(table);
    if (limit && limit > 0) {
      tableGr.setLimit(limit);
    }
    tableGr.query();

    var result = [];
    while (tableGr.next()) {

      var data = {};
      data["sys_id"] = tableGr.getUniqueValue();
      data["name"] = tableGr.getDisplayValue();
      result.push(data);
    }
    return result;
  },

  type: 'RecordFinderUtil'
}; 




/*
 * REST script
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

  // https://<instance_rest_endpoint>?table=incident&limit=10
  var queryParams = request.queryParams;
  var tableName = queryParams.table;  // 'incident'
  var limit = queryParams.limit;  // 10 or undefined

  var util = new RecordFinderUtil();
  var answer = {};
  answer.status = 'OK';
  answer.author = gs.getUserName();
  answer.items = util.getDisplayNames(tableName, limit);
  response.setBody(answer);
  
  return response;

})(request, response);
