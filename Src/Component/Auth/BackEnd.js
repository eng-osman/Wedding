import * as  firebase from 'firebase';
import Axios from "axios";

class BackEnd {
    uid = '';
    name = ''
    param = {}
    messageRef = ''
    messageRefForMe = ''
    FindById(_id, callback) {
        Axios.get('https://evil-skeleton-31303.herokuapp.com/Api/Profile/findById', { _id })
            .then((user) => {
                callback(user.data)
            }).catch((e) => alert(e.response.data.msg))
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name
    }
    chat = []
    setChat(chat) {
        this.chat = chat
    }
    getChat() {
        return this.chat
    }
    constructor() {
        firebase.initializeApp({
            apiKey: "AIzaSyDFX3djoU2VTEPtWOriU_HbJJZYnLvppgk",
            authDomain: "chat-95683.firebaseapp.com",
            databaseURL: "https://chat-95683.firebaseio.com",
            projectId: "chat-95683",
            storageBucket: "chat-95683.appspot.com",
            messagingSenderId: "441074233308"
        })
        firebase.auth().signInAnonymously();
    }
    setParam(id, name) {
        this.param = {
            _id: id,
            name: name
        }
    }
    getParam() {
        return this.param
    }
    setUid(value) {
        this.uid = value
    }
    getUid() {
        return this.uid
    }
    getInfoByID(id) {
        var object = {};
        for (var x in object.results) {
            if (object.results[x].id == id) {
                return [object.results[x].loc, object.results[x].name];
            }
        }
    }
    async loadMsgForMe(resverId, callback) {
        let obj = {}
        this.messageRefForMe = firebase.database().ref(`/`);
        this.messageRefForMe.off();
        const onReseve = (data) => {
            obj.result = data.val()
            callback(data.val())
        }
        await this.messageRefForMe.on('child_added', onReseve)
        //const x = obj.result
    }
    loadMessage(_idForResever) {
        let messages = [];
        this.messageRef = firebase.database().ref(`messages/${this.getUid()}/${_idForResever}`);
        this.messageRef.off();
        const onReseve = (data) => {
            const message = data.val();
            messages.unshift({
                _id: this.getUid(),
                text: message.text,
                user: {
                    _id: message.user._id,
                    name: message.user.name
                }
            })
        }
        this.messageRef.limitToLast(20).on('child_added', onReseve)
        return messages
    };
    sendMessage(message, callback) {
        const d = new Date()
        this.messageRef = firebase.database().ref(`messages/${this.getUid()}/${message.user._id}`)
        this.messageRef.push({
            _id: this.getUid(),
            name: this.getName(),
            text: message.text,
            date: d.toDateString(),
            user: message.user,
        }).then(() => { callback() }).catch((e) => alert('erorr' + e))
    }
}
module.exports = new BackEnd();