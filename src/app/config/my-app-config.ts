export default {
    auth: {
        domain: "dev-yemqhjp57680uuzo.us.auth0.com", //Ex: dev-xxxxxxxxxxx.us.auth0.com
        clientId: "ZKejVnCcAnGVEazGWokkxE45kHKzhPBz",
        authorizationParams: {
            redirect_uri: "http://localhost:4200/login/callback",
            audience: "http://localhost:8080",
          },
    },
    httpInterceptor: {
        allowedList: ['http://localhost:8080/api/orders/**','http://localhost:8080/api/checkout/purchase'],
    },
}