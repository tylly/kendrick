//define your functions then make them appear on hover
var imageFile = ["url(tpab.jpg)","url(good.png)", "url(damn.jpg)"];
var imageFile2 = ["kendrick_tpab.png","kendrick_gkmc3.png", "kendrick_damn.png"]
$("#home").css('background-image', imageFile[1]);

document.getElementById("tpab").addEventListener("mouseover", function(){
    //document.getElementById("home").style.backgroundImage = '-webkit-linear-gradient(top, #eef2f3,#8e9eab)';
    $("#home").css('background-image', imageFile[0]).fadeIn(3000);
    $("#kendrick").fadeIn(3000).attr("src",imageFile2[0]);
    document.getElementById("lyrics-content").innerHTML = "Every nigga is a star When I get signed, homie, I'ma act a fool my name is Uncle Sam, I'm your dog I'm mad but I ain't stressin' I remember you was conflicted, misusing your influence N-E-G-U-S Socks and skinny jeans Sometimes, I did the same	Loving you is complicated The caterpillar is a prisoner to the streets that conceived itWings begin to emerge, breaking the cycle of feeling stagnant What’s your perspective on that? Pac? Pac? Pac?! we gon' be alright and we hate po-po My rights, my wrongs; I write 'til I'm right with God The evils of Lucy was all around me The day I came home No socks and skinny jeans Obama say, 'What it do?'' He said, 'My son, temptation is one thing that I've defeated' embrace your loss. I am God I'm the biggest hypocrite of 2015 The blacker the berry, the sweeter the juice Trial, tribulation, but I know God";


    //document.getElementById("main-title").innerHTML = "ok";



   	
});

document.getElementById("gkmc").addEventListener("mouseover", function(){

    $("#home").css('background-image', imageFile[1]).fadeIn(3000);
    $("#kendrick").fadeIn(3000).attr("src",imageFile2[1]);
    document.getElementById("lyrics-content").innerHTML = "Lord, forgive me Sometimes I need to be alone C-O-M-P-T-O-N, my city, mobbin' in the street Usually I’m drug-free, but, shit, I’m with the homies Me and the homies  Man down, where you from m.A.A.d city If Pirus and Crips all got along Pour up (drank) All I have in life is my new appetite for failure Halle Berry or hallelujah These bitch-ass niggas killed my brother!  This Piru shit been in me forever And every day that glass mirror get tougher to watch Am I worth it? Did I put enough work in? The good kid, m.A.A.d city Tired of runnin', tired of huntin' the reaper callin, I'm cotton mouth Dyin' of thirst How many sins? I lost count My best days, I stress days your REAL life What love got to do with it when you don't love yourself? Ya bish This is King Kendrick Lamar Lord God, I come to you a sinner All my life I want money and power Poetic justice, poetic justice If I told you that a flower bloomed in a dark room would you trust it? But I could never right my wrongs 'less I write it down for real I can feel the changes Look inside of my soul And you can find gold and maybe get rich Really I'm a sober soul But I'm with the homies right now";
});

document.getElementById("damn").addEventListener("mouseover", function(){
    $("#home").css('background-image', imageFile[2]).fadeIn(3000);
    $("#kendrick").fadeIn(3000).attr("src",imageFile2[2]);
    document.getElementById("lyrics-content").innerHTML = "Is it wickedness? Is it weakness? I seen a woman—a blind woman You've lost… your life. Loyalty, got royalty inside my DNA I got, I got, I got, I got— I know murder, conviction Burners, boosters, burglars, ballers, dead, redemption My DNA not for imitation Mama told me that I'ma work myself to death I'm a Israelite, don't call me Black no mo' Ain't nobody prayin' for me WI can feel it, the dream is more than process What happens on Earth stays on Earth  Why God, why God do I gotta suffer? I beat yo ass, keep talkin' back I do it for Compton go to Cuba, that's the only option Difference between black artists and wack artists I'm a savage, I'm a asshole, I'm a king Sit down be humble (hol up hol up hol up hol up All this money, is God playin' a joke on me? I need some water Damn, love or lust Walk myself to the court like, 'Bitch, I did that!'' X-rated If somebody kill my son, that mean somebody gettin' killed. (Pray for me) Damn! America's reflections of me, that's what a mirror does";
});