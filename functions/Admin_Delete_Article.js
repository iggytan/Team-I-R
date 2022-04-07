  exports = function(arg){
  var collection = context.services.get("mongodb-atlas").db("zhitecliffe").collection("articles");
  collection.deleteMany([
  {"Category" : "Arts"},
  {"Type" : "Biography"},
  {"Name": "Vincent Van Gogh"},
  {"Born": "1600"},
  {"Died": "1640"},
  {"Nationality": "Italian"},
  {"Known For": "Sculptor"},
  {"Notable Work": "Kingdom of Heaven"},
  {"About": "God's work - during ancient times"},
  {"Year": "1623"},
  {"Medium": "Clay"},
  {"Dimensions": "6 Feet tall"},
  {"Location": "Italy"},
  {"Designed By": "God"},
  {"Developer": "Iggy"},
  ]);
  };

  