var userName = request.getParameter('userName');
var password = request.getParameter('password');
if(userName=='manu' && password=='manu'){
    new Log().info('****' + page.isLogged);
    page.isLogged = true;
    new Log().info('****' + page.isLogged);
}