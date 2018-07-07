class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: TEST_DATA
    }
   }

  render() {
    return (
      <div className = "app">
        <Title />
        <MessageList />
        <SendMessageForm />
     </div>
    )
  }
}

const TEST_DATA = [
  {
    senderId: "kateb",
    test: "I miss Paris."
  },
  {
    senderId: "johnearly",
    text: "I find that I miss it."
  }
]
