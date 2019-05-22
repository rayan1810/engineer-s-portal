'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
Route.get('/', 'PostController.home');
Route.get('/music', 'MusicController.home');
Route.on('/signup').render('auth.signup');
Route.on('/login').render('auth.login');
Route.post('login','UserController.login');
// Route.get('/music','PostController.music');
Route.post('/signup', 'UserController.create');
Route.get('/logout',async({auth, response})=>{
    await auth.logout();
    return response.redirect('/');
})


Route.get('/post-a-job','PostController.userIndex');
Route.post('/post-a-job','PostController.create');


Route.get('/post-a-job/delete/:id','PostController.delete');
Route.get('/post-a-job/edit/:id','PostController.edit');
Route.post('/post-a-job/update/:id','PostController.update');
