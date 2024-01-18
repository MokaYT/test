 function setupUI(){
		var style = document.createElement('style');
    style.type = 'text/css';

    var css = `
#modmenubtn {
  z-index: 21;
  top: 30vh;
  width: 10vh;
  height: 10vh;
  border-style: none;
  background: url('https://imgur.com/QygCc3e.png');
  background-size: 10vh 10vh;
  background-repeat: no-repeat;
  position: fixed;
  right: 5vh;
  opacity: 1;
}

#modmenuclosebtn {
  z-index: 21;
  top: 1vh;
  width: 6vmin;
  height: 6vmin;
  border-style: none;
  background: url('https://imgur.com/x9VGklK.png');
  background-size: 6vmin;
  background-repeat: no-repeat;
  position: fixed;
  right: 6vh;
}

#modmenu {
  z-index: 20;
  top: 33vh;
  width: 30vmin;
  height: 40vmin;
  border-style: solid;
  border-radius: 20px;
  border-color: #353634;
  background-color: rgb(0 0 0 / 60%);
  position: absolute;
  right: 6vh;
}

#modmenu input {
  width: 85%;
}

#modmenutitle {
  font-size: 2.5vmin;
  margin: 0;
  position: relative;
  display: block;
  height: 3vmin;
  text-align: center;
  color: #8c8282;
  z-index: -1;
}

.modmenusubtitle {
  font-size: 2vmin;
  position: relative;
  display: block;
  width: 100%;
  height: 1vmin;
  text-align: center;
  color: #b2acac;
}
		#title {
		 z-index: 7;
		}

        #modmenutitle {
            color: #7289da;
            margin-bottom: 10px;
        }

        #modmenusubtitle {
            color: #ffffff;
        }

        #modmenu .buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: -5px;
            margin-right: 3%;
            width: 100%;
        }

        #modmenu .buttons button {
            margin: 5px;
            padding: 5px 10px;
            background-color: #7289da;
            color: white;
            border: none;
            border-radius: 5px;
            margin: 3px;
            width: 90%;
            cursor: pointer;
        }

        .game-over-block {
    background-image: url('https://imgur.com/ZLrahOh.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 33vmin;
    height: 24vmin;

    #gallery-btn {
  border-radius: 100%;
  width: 130px;
  height: 130px;
  margin: 0;
  border-style: none;
  z-index: 25;
  background-color: rgba(255, 255, 255, 0.6);
  background-image: url("");
}

#play-btn {
  background-image: url('https://imgur.com/5CVgh9Z.png');
  justify-content: center;
  background-size: 90px;
  background-repeat: no-repeat;
  background-color: black;
}

#spectate-btn {
  background-image: url('https://imgur.com/9uVyMAA.png');
  justify-content: center;
  background-size: 90px;
  background-repeat: no-repeat;
  background-color: black;
}

#settings-btn {
  background-image: url('https://imgur.com/khD251j.png');
  justify-content: center;
  background-size: 90px;
  background-repeat: no-repeat;
  background-color: black;
}

#lead-btn {
  background: url('https://imgur.com/35RVcRC.png');
  right: 1vmin;
}

#leaveBtn {
  opacity: 1;
  left: 1vmin;
  background: url('https://imgur.com/uPAWVDq.png');
}

#fullScreenBtn {
  position: absolute;
  width: 6vw;
  height: 6vw;
  top: 12vh;
  left: 12vh;
  opacity: 1;
  z-index: 99;
  background: url('https://imgur.com/j54O1rq.png');
  background-size: 100% 100%;
  border-style: none;
}

.nipple .back {
  background-image: url('https://imgur.com/hUcx4VA.png');
}

.nipple .front {
  background-image: url('https://imgur.com/XrgEyY5.png');
}

#leaderboard {
  padding-left: 3vmin;
  padding-right: 3vmin;
  padding-bottom: 3vmin;
  width: 25vmin;
  height: 30vmin;
  margin: 0;
  overflow: hidden;
  font-family: sans-serif;
  font-weight: bold;
  position: absolute;
  top: 1vh;
  right: 5vmin;
  z-index: 1;
  color: #eee;
  background-image: url('https://imgur.com/6X7gjhu.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#login {
    width: 280px
}

#login form span {
    background-color: #363b41;
    border-radius: 3px 0 0 3px;
    color: #606468;
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 50px
}

#login form input {
    height: 50px
}

#login form input[type=email],input[type=password],input[type=text] {
    background-color: #3b4148;
    border-radius: 0 3px 3px 0;
    color: #606468;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 230px
}

#login form input[type=submit] {
    background-color: #302e2f;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 80px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
    width: 280px
}

#login form input[type=submit]:hover {
    background-color: #514b4d
}

#login>p {
    text-align: center
}

#login>p span {
    padding-left: 5px
}

#chat_textbox {
  margin: 0;
  padding: 1vmin 3vmax 1vmin 3vmax;
  border-radius: 3vmax;
  transition: all .5s ease-in-out;
  background: rgb(158 158 167 / 50%);
  border: 0;
  color: white;
  text-indent: 2vmin;
  font-family: "Ubuntu";
  width: 25vmin;
}

#chat_textbox:focus {
  background: rgb(55 52 52 / 50%);
}

#chatBtn {
  opacity: 1;
  background: url(./assets/img/Chat.png);
  width: 3vmax;
  height: 3vmax;
  background-size: 100% 100%;
  border-style: none;
}

#emojiBtn {
  opacity: 1;
  color: white;
  background: url(./assets/img/Emoji.png);
  width: 3vmax;
  height: 3vmax;
  background-size: 100% 100%;
  border-style: none;
}
    `;
