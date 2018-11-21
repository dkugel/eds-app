var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/dispenser/',
            url: './pages/dispenser.html',
        },
        {
            path: '/storage/',
            url: './pages/storage.html',
        },
        {
            path: '/dispenser-detail/',
            url: './pages/dispenser-detail.html',
        },
        {
            path: '/inventory/',
            url: './pages/inventory.html',
        },
        {
            path: '/eds/',
            url: './pages/eds.html',
        },
    ],
    // ... other parameters
  });
  
var mainView = app.views.create('.view-main');

