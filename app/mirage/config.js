export default function() {

  this.get('orders/:orderId', function() {
    return {
      "order": {
        "id": "1",
        "orderId": "3b9d46b7-eaf7-4e20-a19a-0de64a14622b",
        "rooms": [
          {
            "adults": [
              {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": ""
              }, {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": ""
              }
            ],
            "childs": [
              {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "2"
              }, {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "4"
              }, {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "7"
              }
            ],
            "babies": [
              {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "1"
              }, {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "11"
              }
            ]
          }, {
            "adults": [
              {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": ""
              }
            ],
            "childs": [
              {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "2"
              }, {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "7"
              }
            ],
            "babies": [
              {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "1"
              }, {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "4"
              }, {
                "firstName": "",
                "lastName": "",
                "birthDate": "",
                "sex": "",
                "age": "11"
              }
            ]
          }
        ],
        "startDate": "03/11/2016",
        "endDate": "05/11/2016",
        "amount": "6,294.00",
        "taxFee": "208.08",
        "totalAmount": "6,502.08",
        "period": "2",
        "accommodation": "Chalé Standard",
        "food": "Diária com café da manhã"
      }
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
