var app = new Vue(
    {
        el: "#root",
        data: {
            immagini: [
                {
                    'id' : 1,
                    'img' : 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'shown' : true
                },
                {
                    'id' : 2,
                    'img' : 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'shown' : false
                },
                {
                    'id' : 3,
                    'img' : 'https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'shown' : false
                }
            ],
            counter : 1
        },

        methods: {
            rightSlide : function () {
                
            },

            leftSlide : function () {

            }
        },
    }
)