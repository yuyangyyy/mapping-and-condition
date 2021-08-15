import './App.css';

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: 'grinning face',
  },
  {
    emoji: '🎉',
    name: 'party popper',
  },
  {
    emoji: '💃',
    name: 'woman dancing',
  },
];

function App() {
  const greeting = 'greeting';
  const displayAction = true;
  // creer variable en conditionnel si ture et affichier i am writing jsx
  // si condition est false alors n'affiche pas la p
  return (
    <div className="container">
      <h1 id={greeting}> Hello le monde</h1>
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji.name}>
            <button onClick={displayEmojiName}>
              <div id={emoji.name}>{emoji.emoji}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function App() {
//   const greeting = 'greetingggg';
//   return (
//     <div className="container">
//       <h1 id="greeting">Hello World</h1>
//       <p>I am writing JSX</p>

//       <ul>
//         <li>
//           <button onClick={displayEmojiName}>
//             <span role="img" aria-label="grinning face" id="grinning face">
//               😀
//             </span>
//           </button>
//         </li>
//         <li>
//           <button onClick={displayEmojiName}>
//             <span role="img" aria-label="party popper" id="party popper">
//               🎉
//             </span>
//           </button>
//         </li>
//         <li>
//           <button onClick={displayEmojiName}>
//             <span role="img" aria-label="woman dancing" id="woman dancing">
//               💃
//             </span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default App;
