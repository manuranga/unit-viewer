var unitDirs = new File("../").listFiles();
var units = [];
for (var i = 0; i < unitDirs.length; i++) {
    var dir = unitDirs[i];
    if (dir.isDirectory()) {
        units.push(dir.getName());
    }
}

model.selected = session.get('unit') || application.get('unit');
model.units = units;
