Talk.ready.then(function () {
    var me = new Talk.User({
      id: '123456',
      name: 'Alice',
      email: 'alice@example.com',
      photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
      welcomeMessage: 'Hey there! How are you? :-)',
    });
    window.talkSession = new Talk.Session({
      appId: 'tBA0FUy7',
      me: me,
    });
    var other = new Talk.User({
      id: '654321',
      name: 'Peyton',
      email: 'Peyton1@gmail.com',
      photoUrl: 'https://talkjs.com/images/avatar-4.jpg',
      welcomeMessage: 'Hey, how can I help?',
    });
  
    var conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );
    conversation.setParticipant(me);
    conversation.setParticipant(other);
  
    var inbox = talkSession.createInbox();
    inbox.select(conversation);
    inbox.mount(document.getElementById('talkjs-container'));
  });

