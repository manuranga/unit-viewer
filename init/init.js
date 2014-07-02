var unitDirs = new File("/units").listFiles();
if(unitDirs.length > 0){
    application.put('unit', unitDirs[0].getName());
}
