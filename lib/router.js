/**
 * Created by "sinlov" on 16/3/2.
 */

// Individual Routes
FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('applicationLayout', {
            main: 'chat',
            navbar: 'navbar',
            footer: 'footer'
        });
    },
    name: 'chat'
});

//Not found Routes
FlowRouter.notFound = {
    action: function () {
        BlazeLayout.render('applicationLayout', {
            main: 'notFound',
            navbar: 'navbar',
            footer: 'footer'
        });
    },
    name: 'notFound'
};

//FlowRouter.route('/', {
//    triggersEnter: [function(context, redirect, stop){
//        redirect("/chat");
//    }],
//    action: function(params, queryParams){
//    }
//});


FlowRouter.route('/chat', {
    action: function () {
        BlazeLayout.render('applicationLayout', {
            main: 'chat',
            navbar: 'navbar',
            footer: 'footer'
        });
    },
    name: 'chat'
});


