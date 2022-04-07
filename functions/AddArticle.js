// This function is the endpoint's request handler.
exports = function(request, response) {
    var mycollection = context.services.get("mongodb-atlas").db("zhitecliffe").collection("articles");
    mycollection.insertMany(request.query);
    var test = {"request.query" : request.query, "response": response}
    return test;
};
