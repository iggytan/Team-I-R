// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
    var mycollection = context.services.get("mongodb-atlas").db("zhitecliffe").collection("articles");
    mycollection.insertOne(query);
    return response;
};
