var selected = session.get('unit') || application.get('unit');


var inputJson = session.get('input');
if(!inputJson){
    var sampleFile = new File("../" + selected + "/sample-input.json");
    try{
        sampleFile.open('r');
        inputJson = sampleFile.readAll();
        sampleFile.close();
    }catch (e){
        inputJson = '{}';
    }
}
model.input = encodeURIComponent(inputJson);
model.selected = selected;