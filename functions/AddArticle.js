// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
    var mycollection = context.services.get("mongodb-atlas").db("zhitecliffe").mycollection("articles");
    mycollection.insertOne(query);
    return query;
};
