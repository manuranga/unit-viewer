var selected = session.get('unit') || application.get('unit');

var inputJson;
var sampleFile;
var toBeInputJson = request.getParameter("json");
if (toBeInputJson) {
    session.put('input', toBeInputJson);
    inputJson = toBeInputJson;
} else {
    inputJson = session.get('input');
    if (!inputJson) {
        try {
            sampleFile = new File("../" + selected + "/sampleInput.json");
            sampleFile.open('r');
            inputJson = sampleFile.readAll();
            sampleFile.close();
            model.hasSamples = true;
            model.inputJson = inputJson;
        } catch (e) {
            model.hasSamples = true;
            model.inputJson = null;
        }
    }
}

