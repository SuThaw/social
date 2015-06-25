angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope",function(o){o.$on("login",function(t,n){o.currentUser=n})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(o,t){o.login=function(n,e){t.login(n,e).then(function(t){o.$emit("login",t.data)})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(o,t){o.addPost=function(){o.postBody&&t.create({username:"SuThaw",body:o.postBody}).success(function(t){o.postBody=null})},t.fetch().success(function(t){o.posts=t}),o.$on("ws:new_post",function(t,n){o.$apply(function(){o.posts.unshift(n)})})}]),angular.module("app").service("PostsSvc",["$http",function(o){this.fetch=function(){return o.get("/api/posts")},this.create=function(t){return o.post("/api/posts",t)}}]),angular.module("app").config(["$routeProvider",function(o){o.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(o){var t=this;t.getUser=function(){return o.get("/api/users")},t.login=function(n,e){return o.post("/api/sessions",{username:n,password:e}).then(function(n){return t.token=n.data,console.log(n.data),o.defaults.headers.common["x-auth"]=n.data,t.getUser()})}}]),angular.module("app").run(["$rootScope",function(o){var t="ws://localhost:3000",n=new WebSocket(t);n.onopen=function(){console.log("Web Socket connected")},n.onmessage=function(t){console.log(t);var n=JSON.parse(t.data);o.$broadcast("ws:"+n.topic,n.data)}}]);