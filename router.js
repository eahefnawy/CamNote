Router.map(function() {
    this.route('home', {
        path: '/',
        layoutTemplate: "layout",
        template: 'home',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'spinner',

    });


    this.route('courses', {
        path: '/courses/:id',
        layoutTemplate: "layout",
        template: 'courses',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'spinner',
        data: function(){
        	return this.params;
        }

    });

    this.route('settings', {
        path: '/settings',
        template: 'settings',
        layoutTemplate: 'layout',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'spinner',
        onBeforeAction: function(){
            if(Meteor.isClient) {
                Session.set('title', 'Settings');
            }    
        }

    });
});