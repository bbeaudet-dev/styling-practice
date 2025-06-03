import clsx from 'clsx';
import { useState } from 'react'

function App() {
  type Author = {
    name: string
    pfp?: string // HTMLImageElement if <img>, string if URL, file if <input>
  }
  type Message = {
    id: number
    content: string
    author: Author
  }

  const authors: Author[] = [
    {
      name: "Ben",
      pfp: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c3e06e45-5a90-4639-90e8-13887322da17/Group_48/w=256,quality=90,fit=scale-down"
    },
    {
      name: "Fractal",
      pfp: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f4c07d06-b3b1-4b4a-9660-f7da92da9f69/bitsy_background/w=128,quality=90,fit=scale-down"
    }
  ]

  const [messages, setMessages] = useState<Message[]>(  // type parameters
    [
      {
        id: 1,
        content: "Hey there, this message is just to demonstrate that this application can handle longer messages, i.e. when the text is long enough that it would reach the other side of the screen, where the other author name/picture are, it should only reach to about 80% of the way before starting on a new line. This helps with the visualization of the conversation, as otherwise the flow of conversation is less clear.",
        author: authors[0]
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
  )

  // function Profile(id: number) {
  //   const newMessages = structuredClone(messages)
  //   const newMessage = newMessages.find(message => message.id === id)
  //   if (newMessage === undefined) {
  //     return
  //   } else {
  //   }
  //   return (
  //     <div className='m-.5'>
  //       <p className='text-white'>.</p>
  //       <p className={clsx('p-2 mx-2 rounded-lg', newMessage.author === messages[0].author ? 'bg-blue-300' : 'bg-gray-200')}>{newMessage.content}</p>
  //     </div>
  //   )
  // }


  // if (messages[i-1].author === messages[i].author){sharp top corner, delete name/picture, decrease spacing}
  // if (messages[i+1].author === messages[i].author){sharp bottom corner, delete name/picture, decrease spacing}
  // has to work for both sides

  return (
    <div className='flex flex-col border-1 p-5'>
      {messages.map((message) => {
        return (
          <div className={clsx('flex justify-end', message.author === messages[0].author ? 'flex-row' : 'flex-row-reverse')}>
            <div className='mx-.5 my-1'>
              <p className='text-white text-xs'>.</p>
              <p className={clsx('p-2 mx-2 rounded-lg text-xs max-w-sm', message.author === messages[0].author ? 'bg-blue-300' : 'bg-gray-200')}>{message.content}</p>
            </div>
            <div className={clsx(message.author === messages[0].author ? 'justify-items-start' : 'justify-items-end')}>
              <p className='text-xs font-light'>{message.author.name}</p>
              <img className='h-6 w-6 rounded-full' src={message.author.pfp}></img>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App