console.log('ao')

const app = new Vue ({
    el: '#app',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        activeChatIndex:0,
        newChatMessage: '',
        searchForThis:'',
        chatOptions:null,



        
    },
    methods: {
        addPicture(index){
            return './img/avatar'+ this.contacts[index].avatar + '.jpg'
        },
        changeChatIndex(index){
          /*   console.log(this.activeChatIndex) */
            this.activeChatIndex = index
        },
        addNewChatMessage(inputMessage){
            if (inputMessage == '') return

            this.contacts[this.activeChatIndex].messages.push({date: this.getTimeOfUser(),message:inputMessage,status: 'sent'})
            this.newChatMessage = ''
            this.messageAnswer()
        },
        getTime(index){
           let dateString = this.contacts[this.activeChatIndex].messages[index].date
           let fulldate = dateString = dateString.substring(dateString.indexOf(' '), )
           return fulldate.slice(0,6)
        },
        getLastMessage(index){
            let messagesList = this.contacts[index].messages;

            return messagesList[messagesList.length - 1].date;
        },
        trythis(prova){
            console.log(prova)
        },
        getTimeOfUser(){
            const date = new Date();
            let now = date.getHours() + ':' + date.getMinutes();
            return now
        },
        messageAnswer(){
            setTimeout (() =>{
                this.contacts[this.activeChatIndex].messages.push({date: this.getTimeOfUser(),message:"ok",status: 'received'})
                this.newChatMessage = ''

            },1000)
        },
        search(){
          /*   if (this.searchForThis == "") return */
           
            for (let index = 0; index < this.contacts.length; index++) {
                
                const element = this.contacts[index].name.toLowerCase();
                console.log({element,searchForThis:this.searchForThis})
                this.contacts[index].visible = element.includes(this.searchForThis.toLowerCase())                    
            }
        },
        changeChatOption(index){
            console.log({index, chatOptions:this.chatOptions})
           if(this.chatOptions === index){
            this.chatOptions = false
           } else {
            this.chatOptions = index;
           }
        },
        deleteMex(index){
            console.log(this.chatOptions)
            if(this.contacts[this.activeChatIndex].messages == 1){
                this.contacts[this.activeChatIndex].messages.push({date:"1",message:"1",status:"1"})
            } else{
                this.contacts[this.activeChatIndex].messages.splice(this.chatOptions, 1)
                this.chatOptions = null;

            }
        } 
    }
})

// modificare html e css per inserire menu a tendina nei messaggi, info (che ancora non ho capito quali) e rimozione dell'elemento

/// integrazioni bonus, array di risposte casuali invece del solito ok
// funzione che crea un numero casuale, prende da un array quell'indice e lo usa come risposta

// bonus, array di emoji, ad ogni ricarica della pagina l'icona delle emoji cambia in un emoji diversa