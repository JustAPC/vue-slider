var app = new Vue(
    {
        el: "#root",
        data: {
            immagini: [
                'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ],
            index : 0
        },


        methods: {
            rightSlide () {
                if (this.index < this.immagini.length) {
                    this.index++
                } else {
                    this.index = 0;
                }
            },

            leftSlide () {
                if (this.index > 0) {
                    this.index--
                } else {
                    this.index = this.immagini.length -1;
                }
            }
        },
    }
)