import React, { useState } from 'react';
import AddMesageForm from '../ui/AddMesageForm';
import MessagesList from '../ui/MessagesList';

export default function MessagesPage({ allStudents, allMessages }) {
  const [messages, setMessages] = useState(allMessages);

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      const newMessage = await response.json();
      setMessages((prev) => [newMessage, ...prev]);
    }
  };

  const deleteHandler = async (messageId) => {
    const response = await fetch(`/api/messages/${messageId}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      //   setMessages((prev) =>
      //     prev.toSpliced(
      //       prev.findIndex((message) => message.id === messageId),
      //       1,
      //     ),
      //   );
      setMessages((prev) => prev.filter((message) => message.id !== messageId));
    }
  };
  return (
    <>
      <AddMesageForm submitHandler={submitHandler} allStudents={allStudents} />
      <MessagesList deleteHandler={deleteHandler} messages={messages} />
    </>
  );
}
