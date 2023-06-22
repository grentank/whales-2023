import React from 'react';
import MessageCard from './MessageCard';

export default function MessagesList({ messages, deleteHandler }) {
  return messages.map((message) => (
    <MessageCard deleteHandler={deleteHandler} message={message} key={message.id} />
  ));
}
