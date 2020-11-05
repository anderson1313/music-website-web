function loadalbum() {
    var albumobject = {
                        result: [
                            {
                                href: "lover.html",
                                src: "img/a6.png",
                                singer: "Taylor Swift",
                                albumname: "lover",
                                genre: "pop / R&B"
                            },
                            {
                                href: "red.html",
                                src: "img/a7.png",
                                singer: "Taylor Swift",
                                albumname: "red",
                                genre: "country / pop"
                            },
                             {
                                href: "folklore.html",
                                src: "img/a5.png",
                                singer: "Taylor Swift",
                                albumname: "folklore",
                                genre: "folk / R&B"
                            },
                             {
                                href: "1989.html",
                                src: "img/1989.png",
                                singer: "Taylor Swift",
                                albumname: "1989",
                                genre: "pop / R&B"
                            },
                             {
                                href: "fearless.html",
                                src: "img/fear.png",
                                singer: "Taylor Swift",
                                albumname: "fearless",
                                genre: "country"
                            },
                        ]
                    };
                    var template = " {{#result}}<div class='col-1 album'> <div class=pic><a href='{{href}}'><img src='{{src}}'></a></div> <div class='singer'>{{singer}}</div> <div class='albumname'>{{albumname}}</div> <div class='genre'>{{genre}}</div> </div>{{/result}}";
                    var view = Mustache.render(template, albumobject);
                    $("#a1").append(template);
                    $("#a1").html(view);


};
function loadalbum2() {
    var albumobject = {
                        result2: [
                            {
                                href: "Freestyle Fellowship.html",
                                src: "img/a1.png",
                                singer: "Freestyle Fellowship",
                                albumname: "Innercity Griots",
                                genre: "Rap / Jazz"
                            },
                            {
                                href: "Linkin Park.html",
                                src: "img/a2.png",
                                singer: " Linkin Park",
                                albumname: "Hybrid Theory ",
                                genre: " / rock"
                            },
                             {
                                href: "Tears for Fears.html",
                                src: "img/a3.png",
                                singer: "Tears for Fears",
                                albumname: "The Seeds of Love",
                                genre: " / rock"
                            },
                             {
                                href: "Sade.html",
                                src: "img/a4.png",
                                singer: " Sade",
                                albumname: "Diamond Life",
                                genre: "pop / R&B"
                            },
                             {
                                href: "adele.html",
                                src: "img/hello.png",
                                singer: " Adele",
                                albumname: "hello",
                                genre: "pop"
                            },
                        ]
                    };
                    var template = " {{#result2}}<div class='col-1 album'> <div class=pic><a href='{{href}}'><img src='{{src}}'></a></div> <div class='singer'>{{singer}}</div> <div class='albumname'>{{albumname}}</div> <div class='genre'>{{genre}}</div> </div>{{/result2}}";
                    var view = Mustache.render(template, albumobject);
                    $("#a2").append(template);
                    $("#a2").html(view);


}