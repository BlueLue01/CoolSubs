const app = new Vue({
    el: "#app",
    data: {
        lists:[
            { name:"Protagonist",
                codename: "Joker",
                flipped: false
            },
            { name: "Anne",
                codename: "Panther",
                flipped: false
            },
            { name: "Ryuji",
                codename: "Skull",
                flipped: false
            }
        ],

        name: "",
        email: "",
        nameWorks: false,
        emailWorks: false,

    },


    watch: {
        name: function () {
            if (this.name.length >= 2) {
                this.nameWorks = true;
            } else {
                this.nameWorks = false;
            }
        },
        email: function () {
            const Email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const check = Email.test(this.email);
            if (check) {
                this.emailWorks = true;
            } else {
                this.emailWorks = false;
            }
        }
    },


    computed: {
        submit: function () {
            if (this.name.length < 1 && this.email.length < 1) {
                return "";
            } else if (this.nameWorks && this.emailWorks) {
                return "Submitted";
            } else {
                return "Not Submitted";
            }
        },
        mess: function () {
            if (this.name.length < 1 & this.email.length < 1) {
                return "";
            } else if (!this.nameWorks & !this.emailWorks) {
                return "Name needs to be 2 characters or more and email needs to be valid";
            } else if (!this.nameWorks & this.emailWorks) {
                return "Your name needs to be 2 characters or more";
            } else if (this.nameWorks & !this.emailWorks) {
                return "Your email needs to be valid";
            } else {
                return "";
            }
        }
    }
});
