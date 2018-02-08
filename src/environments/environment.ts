export let environment = {
  production: false,
  users: [
            {
                "username": "test",
                "password": "test",
                "name": "Mihai",
                "surname": "Stan",
                "email": "stan.mihaioctavian@gmail.com",
                "id": "322AA",
                "attendance" : ["111","112","114","115"]
            },
            {
                "username": "test1",
                "password": "test1",
                "name": "Ion",
                "surname": "Vasile",
                "email": "ion.vasile@gmail.com",
                "id": "322AB",
                "attendance" : ["116"]
            }  
  ],
  laboratories: [
                    {
                        "name": "AWJ",
                        "dates": [
                                    {
                                        "day": "Saturday",
                                        "hour": 1300
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 1800
                                    }
                        ],
                        "groups": ["322AB", "322AC"],
                        "id": "111"
                    }, 
                    {
                        "name": "BD",
                        "dates": [
                                    {
                                        "day": "Saturday",
                                        "hour": 1100
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 1000
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "112"
                    },
                    {
                        "name": "SMI",
                        "dates": [
                                    {
                                        "day": "Monday",
                                        "hour": 1500
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 900
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "113"
                    },
                    {
                        "name": "TSM",
                        "dates": [
                                    {
                                        "day": "Saturday",
                                        "hour": 1600
                                    },
                                    {
                                        "day": "Friday",
                                        "hour": 1200
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "114"
                    }
  ],
  courses: [
                    {
                        "name": "AWJ",
                        "dates": [
                                    {
                                        "day": "Friday",
                                        "hour": 1300
                                    },
                                    {
                                        "day": "Saturday",
                                        "hour": 1800
                                    }
                        ],
                        "groups": ["322AB", "322AC"],
                        "id": "115"
                    }, 
                    {
                        "name": "BD",
                        "dates": [
                                    {
                                        "day": "Friday",
                                        "hour": 1100
                                    },
                                    {
                                        "day": "Saturday",
                                        "hour": 1000
                                    }
                        ],
                        "groups": ["322AA"],
                        "id": "116"
                    }
  ] 
};