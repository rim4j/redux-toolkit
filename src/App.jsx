import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div data-theme={theme}>
      <p className='text-6xl'>hello world</p>
      <button onClick={toggle} className='btn '>
        Button
      </button>
      <article className='prose'>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
      <article className='prose'>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        fuga! Nam odio recusandae in, incidunt impedit ipsam consequatur quae.
        Ea, praesentium! Sequi, inventore magni ullam eum libero ex cupiditate?
        Mollitia!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        fuga! Nam odio recusandae in, incidunt impedit ipsam consequatur quae.
        Ea, praesentium! Sequi, inventore magni ullam eum libero ex cupiditate?
        Mollitia!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        fuga! Nam odio recusandae in, incidunt impedit ipsam consequatur quae.
        Ea, praesentium! Sequi, inventore magni ullam eum libero ex cupiditate?
        Mollitia!
      </p>
    </div>
  );
}

export default App;
