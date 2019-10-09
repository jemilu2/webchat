/*
A place to view my components as I build them
*/

import Component from '../components/ChatCard';

const messages = [
  {
      number:"+233245744862",
      content:"Hello",
      time:"15:43",
      own:true
  },
  {
      number:"+233244722868",
      content:"Hi",
      time:"15:44",
      own:false
  },
  {
      number:"+233245744862",
      content:"How are you?",
      time:"15:45",
      own:true
  },
]


export default () => {
  return <Component message={{"username":"me","content":"hello","time":"now"}} title="Commerce class" time="13:13" subtitle="last seen 00:43" />
}
