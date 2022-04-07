exports = function(StudentBrowseCategory) {
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("zhitecliffe").collection("articles");
  return mycollection.find({Category: 'Arts'});
};