if(request.getMethod()=='POST'){
    var fname = request.getParameter('fname');
    new Log().info(fname);
}