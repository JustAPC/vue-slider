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
            counter : 0
        },

        created () {
            this.loopStart ()
        },

        methods: {
            rightSlide : function () {
                if (this.counter < this.immagini.length - 1) {
                    this.counter++
                } else {
                    this.counter = 0;
                }
            },

            leftSlide : function () {
                if (this.counter > 0) {
                    this.counter--
                } else {
                    this.counter = this.immagini.length -1;
                }
            },

            loopStart : function () {
                setInterval(() => {
                    this.rightSlide ();
                }, 3000);
            },

            dotClick : function (photoIndex) {
                this.counter = photoIndex;
            }
        },
    }
)