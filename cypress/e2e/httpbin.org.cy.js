describe('httpbin tests', () => {
    const apiwebsitenonexist = {
      url: 'https://httpbin.org/non-existing-url',
      failOnStatusCode: false
    };

    const apiwebsite = {
        method: 'GET',
        url: 'https://httpbin.org/',
        headers: {
            'host': 'httpbin.org',
            'referer': 'https://httpbin.org/',
            'user-agent': 'My test user-agent',
            'Cookie': 'cookieName=123456',
        },
        failOnStatusCode: false
    }

    const apiwebsitepost = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false,
    }

    const bodyData = {
        bodyKey: "bodyValue"
      };

    const apiwebsiteget = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: {
            'keys': '12345'
        },
        failOnStatusCode: false,
    }

    const apiwebsiteput = {
        method: 'PUT',
        url: 'https://httpbin.org/put',
        failOnStatusCode: false,
    }

   
    it('respone code should be 404', () => {
        cy.request(apiwebsitenonexist).then(response =>{
        const result2 = response.status;
        assert.equal(404, result2)
        })
    });

    it('response code should be 200', () => {
      cy.request(apiwebsiteget).then(response => {
        const result = response.status;
        assert.equal(200, result);
        })
    });

    it('tests for get', () => {
        cy.request(apiwebsiteget).then(response =>{
            const result3 = response.status;
            assert.equal(200, result3)
            assert.equal(12345, response.body.args.keys)
        })
    });
    
    it('test for POST', () => {
        cy.request(apiwebsitepost).then(response =>{
            const result4 = response.status;
            assert.equal(200, result4)
        })
    });


    it('test for PUT', () => {
        cy.request(apiwebsiteput)
        .should((response) => {
        expect(response.status).to.equal(200)
        })
    });

    it('test user-agent in headers', () => {
        cy.request(apiwebsite).then(response => {
          assert.equal(200, response.status);
          assert.equal("My test user-agent", response.requestHeaders['user-agent']);
        })
    });

    it('test send cookie', () => {
        cy.request(apiwebsite).then(response => {
          assert.equal(200, response.status);
          assert.equal("cookieName=123456", response.requestHeaders['Cookie']);
        })
      })
      
      it('test for headers', () => {
        cy.request(apiwebsite).then(response => {
          assert.equal(200, response.status);
          assert.equal("httpbin.org", response.requestHeaders['host']);
          assert.equal("https://httpbin.org/", response.requestHeaders['referer']);
        })
      })
      
      it('test duration 150', () => {
        cy.request(apiwebsite).then(response => {
          assert.equal(200, response.status);
          assert.isFalse(response.duration <= 150)
        })
      })

      // it('test duration 180', () => {
      //   cy.request(apiwebsite).then(response => {
      //     assert.equal(200, response.status);
      //     assert.isTrue(response.duration <= 180)
      //   })
      // })

      it('complex post test', () => {
        cy.request(apiwebsitepost).then(response => {
          assert.equal(200, response.status);
          assert.notStrictEqual(bodyData, response.body.data);
        })
      })

     it('test random ids', () => {
        for(let i = 0; i < 10; i++) {
          const randomId = getRandomInt(10000000);
    
          const random = {
            url: 'https://httpbin.org/',
            id: randomId
          }
    
          cy.request(random).then(response => {
            assert.isTrue(response.status == 200)
          })
        } 
      })
    })
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);

    }

    

