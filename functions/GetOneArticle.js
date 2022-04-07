// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
    const collection = context.services.get("mongodb-atlas").db("zhitecliffe").collection("articles");
    const article = collection.find({Name: request.query.name});
    return  article;
};
