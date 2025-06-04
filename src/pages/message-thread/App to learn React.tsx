import clsx from 'clsx';
import { useState } from 'react'


type Author = {
  id: number,
  name: string
  pfp?: string // HTMLImageElement if <img>, string if URL, file if <input>
}
type Message = {
  id: number
  content: string
  author: Author
}

const authors = {
  0: {
    id: 0,
    name: "Ben",
    pfp: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c3e06e45-5a90-4639-90e8-13887322da17/Group_48/w=256,quality=90,fit=scale-down"
  },
  1: {
    id: 1,
    name: "Fractal",
    pfp: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f4c07d06-b3b1-4b4a-9660-f7da92da9f69/bitsy_background/w=128,quality=90,fit=scale-down"
  }
}

const currentUserID = 0

const messages = [
  {
    id: 1,
    content: "Hey there, this message is just to demonstrate that this application can handle longer messages, i.e. when the text is long enough that it would reach the other side of the screen, where the other author name/picture are, it should only reach to about 80% of the way before starting on a new line. This helps with the visualization of the conversation, as otherwise the flow of conversation is less clear.",
    author: authors[0],
  },
  {
    id: 2,
    content: "I'm having a lot of fun making these styling projects - I can't wait to see what's next!",
    author: authors[0]
  },
  {
    id: 3,
    content: "Just you wait...",
    author: authors[1]
  },
  {
    id: 4,
    content: "What's that supposed to mean?",
    author: authors[0]
  },
  {
    id: 5,
    content: "You'll see...",
    author: authors[1]
  }
]

function App() {

  // if (messages[i-1].author === messages[i].author){sharp top corner, delete name/picture, decrease spacing}
  // if (messages[i+1].author === messages[i].author){sharp bottom corner, delete name/picture, decrease spacing}
  // has to work for both sides

  return <MessageThread messages={messages} />
}

function MessageThread({ messages }: { messages: Message[] }) {
  
  return (
    <div className='flex flex-col border-1 p-5 gap-2'>
      {messages.map((message) => <Message messageData={message} />)}
    </div>
  )
}

// type MessageProps = {
//   messageData: Message
// }

function Message({ messageData }: { messageData: Message }) {
  const isCurrentUser = messageData.author.id === currentUserID
  const hasPreviousMessage = messageData.id - 1 === messageData.id
  const hasFollowingMessage = messageData.id + 1 === messageData.id
  console.log(messageData.id - 1, messageData.id)

  const direction = isCurrentUser ? 'flex-row-reverse' : 'flex-row'
  const background = isCurrentUser ? 'bg-blue-300' : 'bg-gray-200'
  const sideJustify = isCurrentUser ? 'justify-items-start' : 'justify-items-end'

  const topSharpCorner = isCurrentUser ? 'rounded-tl-lg' : 'rounded-tr-lg'
  const topCorners = hasPreviousMessage ? topSharpCorner : 'rounded-t-lg'

  const bottomSharpCorner = isCurrentUser ? 'rounded-bl-lg' : 'rounded-br-lg'
  const bottomCorners = hasFollowingMessage ? bottomSharpCorner : 'rounded-b-lg'

  return (
    <div className={clsx('flex justify-start relative', direction)}>
      <div className={clsx(sideJustify)}>
        <p className='text-xs font-light absolute text-gray-400 -top-4'>{messageData.author.name}</p>
        <img className='h-6 w-6 rounded-full' src={messageData.author.pfp}></img>
      </div>
      <div className='mx-.5'>
        <p className={clsx('p-2 mx-2 text-xs max-w-sm', topCorners, bottomCorners, background)}>{messageData.content}</p>
      </div>
    </div>
  )
}

export default App